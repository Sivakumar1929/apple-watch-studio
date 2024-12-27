import Image from "next/image";

  interface WatchPreviewProps {
    caseType: string;
    bandType: string;
    size: string;
  }
  
  export default function WatchPreview({ size }: WatchPreviewProps) {
   
    const getSizeClass = () => {
      switch (size) {
        case 'small':
          return 'w-48 h-48';
        case 'large':
          return 'w-64 h-64';
        default:
          return 'w-64 h-64';
      }
    };
  
    return (
      <div className="watch-preview mx-auto my-6">
        <Image
          src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv"
          alt="Customized Watch"
          width={200}
          height={150}
          className={`object-contain transition-transform duration-500 hover:rotate-6 hover:scale-110 ${getSizeClass()}`}
        />
      </div>
    );
  }
  