import React from 'react';
import { useWallet } from '../context/WalletContext';

const WalletConnector: React.FC = () => {
  const { walletAddress, connectWallet } = useWallet();

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={connectWallet}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Connect Wallet
      </button>
      {walletAddress && <p className="mt-4">Wallet Address: {walletAddress}</p>}
    </div>
  );
};

export default WalletConnector;