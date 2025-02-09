import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen w-screen bg-gradient-radial from-[#1e293b] to-[#0f172a] overflow-hidden">
      <div className="w-40 h-40 bg-gradient-to-br from-white/30 to-white/10 rounded-full shadow-w[0_0_20px_5px_rbga(0,255,255,0.6)] animate-float"></div>
      <div className="w-40 h-40 bg-gradient-to-br from-white/30 to-white/10 rounded-full shadow-w[0_0_20px_5px_rbga(0,255,255,0.6)] animate-float"></div>
      <div className="w-40 h-40 bg-gradient-to-br from-white/30 to-white/10 rounded-full shadow-w[0_0_20px_5px_rbga(0,255,255,0.6)] animate-float"></div>
    </div>
  );
}
