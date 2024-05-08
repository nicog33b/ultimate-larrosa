import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      
        <div className="relative w-32 h-32 md:w-28 md:h-28">
          <Image
            src="/images/logoFinal.png"
            alt="Logo"
            width={600}
            height={600}
            className=" md:hover:scale-150 rounded-full transition-all duration-300 ease-in-out transform hover:scale-125 hover:shadow-lg object-fill"
          />
        </div>
     
    </Link>
  );
};

export default Logo;
