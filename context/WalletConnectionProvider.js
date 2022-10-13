import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { useMemo } from 'react'

const connection = "https://blissful-bitter-scion.solana-devnet.discover.quiknode.pro/a1b649044eb913e36eb71d13a9a6a224495ce126/"

const WalletConnectionProvider = ({ children }) => {
    const endpoint = useMemo(() => connection, [])

    const wallets = useMemo(() => [new PhantomWalletAdapter()], [])

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}

export default WalletConnectionProvider
