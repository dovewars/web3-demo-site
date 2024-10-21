"use client";
import React, { useState, useEffect } from "react";
import products, { Product } from "@/app/lib/data";
import Image from "next/image";
import ThreeDModel from "@/app/ui/ThreeDModel";
import Web3 from "web3";

interface Ethereum {
  isMetaMask: boolean;
  request: <T>(args: { method: string; params?: unknown[] }) => Promise<T>;
  on: (event: string, handler: (accounts: string[]) => void) => void;
}

declare global {
  interface Window {
    ethereum: Ethereum;
  }
}

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const numHex = (s: number) => {
    let a = s.toString(16);
    if (a.length % 2 > 0) {
      a = "0" + a;
    }
    return a;
  };

  const buyProduct = async (product: Product) => {
    if (!account || !web3) return;
    try {
      if (!process.env.NEXT_PUBLIC_ACCOUNT) {
        throw new Error("Environment variable ACCOUNT is not set.");
      }
      const priceInWei = Number(web3.utils.toWei(product.priceInETH, "ether"));
      const stringWei = "0x" + numHex(priceInWei); // convert wei value to hex
      const transactionParameters = {
        to: process.env.NEXT_PUBLIC_ACCOUNT, // replace with your Ethereum address or contract address
        from: account,
        value: stringWei,
        chainId: 11155111, // Chain ID for Sepolia network
      };
      console.log(transactionParameters);
      await window.ethereum.request<void>({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
    } catch (error) {
      console.error("Error making transaction:", error);
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
      window.ethereum
        .request<string[]>({ method: "eth_requestAccounts" })
        .then((accounts) => {
          setAccount(accounts[0]);
        })
        .catch((error: Error) => {
          console.error("Error connecting to MetaMask:", error);
        });
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        setAccount(accounts[0]);
      });
    } else {
      console.error("MetaMask is not installed!");
    }
  }, []);

  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-3.5">
        {products.map((product) => (
          <div
            className="border rounded-lg border-gray-500 pb-2"
            key={product.id}
          >
            <div className="relative flex justify-center items-center py-5 px-4">
              <div className="relative">
                {product.is3D ? (
                  <p className="absolute left-3 top-3 z-10 text-shadow-lg text-yellow-100">
                    3D
                  </p>
                ) : (
                  <div />
                )}
                <Image
                  src={product.imageName}
                  alt={product.name}
                  width={270}
                  height={270}
                  className="rounded-lg border border-yellow-100 silver-glow transform transition-transform hover:scale-105 cursor-pointer"
                  onClick={() => openModal(product)}
                />
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-300 mx-4">
              {product.name}
            </h3>
            <p className="text-base text-gray-300 line-clamp-2 h-12 pt-1 mx-3">
              {product.description}
            </p>
            <div className="flex items-center justify-center my-4">
              <button
                className=" text-base md:text-lg mr-5 py-2 px-4 border rounded-lg text-center silver-glow"
                onClick={() => buyProduct(product)}
              >
                BUY NOW
              </button>
              <p className="text-base md:text-xl text-yellow-200">
                {product.priceInETH} ETH
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {selectedProduct &&
        (selectedProduct.is3D ? (
          <ThreeDModel
            modelUrl={`/${selectedProduct.id}.glb`}
            onClose={closeModal}
          />
        ) : (
          // Image Modal component for non-3D models
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative h-[90%] flex justify-center items-center bg-black">
              <button
                className="absolute top-2 right-2 text-white text-3xl font-bold z-50"
                onClick={closeModal}
              >
                &times;
              </button>
              <Image
                src={selectedProduct.imageName}
                width={1024}
                height={1024}
                alt="Model"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        ))}
    </div>
  );
}
