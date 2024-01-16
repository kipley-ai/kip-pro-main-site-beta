type TextProps = {
    code: string;
}

export const Text = ({code}: TextProps) => {
    return (
        <>Join the missions in @KIPprotocol and start to earn NFTs and airdrop $KIP.
        
        Go to https://kip.pro/campaigns and enter the invite code:
        👉🏻 {code} 👈🏻
        
        Stay Smort. Stay Knawligible! 🧠
        </>
    )
}

export default Text;