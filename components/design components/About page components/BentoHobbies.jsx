import Image from 'next/image';
import React from 'react';

const BentoHobbies = () => {
  return (
    <div className='w-full h-[70vh] p-6 bg-black/90 grid grid-cols-4 grid-rows-4 gap-4'>
      {/* Top-left Block - Football */}
      <div className='col-span-2 row-span-2 rounded-lg overflow-hidden relative'>
        <Image 
          src='https://www.ownsport.fr/blog/wp-content/uploads/2018/02/Football-1024x576.jpg' 
          alt='Football' 
          className='w-full h-full' 
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className='flex items-center justify-center h-full text-white text-lg font-bold bg-black bg-opacity-50'>Football</div>
      </div>

      {/* Top-middle Block - Volleyball */}
      <div className='col-span-2 row-span-1 rounded-lg overflow-hidden flex relative'>
        <Image 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSOtx-0tBbg17n3aoTeDK3kqUMRoA9XFuyTA&s' 
          alt='Volleyball' 
          className='w-full h-full' 
          fill
          style={{ objectFit: 'cover' }}
        />
        <Image 
          src='https://static.posters.cz/image/1300/affiches-et-posters/league-of-legends-champions-i102252.jpg' 
          alt='Volleyball' 
          className='w-full h-full' 
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className='flex sm:hidden items-center justify-center h-full text-white text-lg font-bold bg-black bg-opacity-50'>League of Legends</div>
      </div>

      {/* Top-right Block - League of Legends */}
      <div className='col-span-1 row-span-2 rounded-lg overflow-hidden relative'>
        <Image 
          src='https://m.media-amazon.com/images/S/pv-target-images/9c65e1c59f2afc50128f9ec3fe07943af0a2940067be13c5bd40516ecfcc3b23._SX1080_FMjpg_.jpg' 
          alt='League of Legends' 
          className='w-full h-full' 
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className='flex items-center justify-center h-full text-white text-lg font-bold bg-black bg-opacity-50'>Volleyball</div>
      </div>

      {/* Middle-left Block - Elden Ring */}
      <div className='col-span-1 row-span-2 rounded-lg overflow-hidden relative'>
        <Image 
          src='https://assets.xboxservices.com/assets/1d/5b/1d5bc84f-2135-4e2f-8ca6-bb000d97db7f.jpg?n=Elden-Ring_GLP-Poster-Image-1084_1920x1080.jpg' 
          alt='Elden Ring' 
          className='w-full h-full' 
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className='flex items-center justify-center h-full text-white text-lg font-bold bg-black bg-opacity-50'>Elden Ring</div>
      </div>

      {/* Bottom-middle Block - Dragon Ball */}
      <div className='col-span-2 row-span-1 rounded-lg overflow-hidden relative'>
        <Image 
          src='https://fr.web.img2.acsta.net/pictures/22/11/22/14/02/3642167.jpg' 
          alt='Dragon Ball' 
          className='w-full h-full' 
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className='flex items-center justify-center h-full text-white text-lg font-bold bg-black bg-opacity-50'>Reading</div>
      </div>

      {/* Bottom-right Block - Reading */}
      <div className='col-span-2 row-span-1 rounded-lg overflow-hidden flex relative'>
        {/* Large Background Image */}
        <Image 
          src='https://m.media-amazon.com/images/I/61NAx5pd6XL._AC_UF1000,1000_QL80_.jpg' 
          alt='Reading' 
          layout="fill"  // Correct usage with layout="fill"
          objectFit="cover"  // Next.js Image component uses objectFit directly as a prop
          className='w-full h-full'
        />

        {/* Smaller Foreground Image */}
        <div className="absolute bottom-4 right-4 w-24 h-24">
          <Image 
            src='https://m.media-amazon.com/images/I/61NAx5pd6XL._AC_UF1000,1000_QL80_.jpg' 
            alt='Reading Thumbnail' 
            layout="fill"  // Correct usage with layout="fill"
            objectFit="contain"  // Direct prop for object-fit
            className='rounded-md'
          />
        </div>
      </div>
    </div>
  );
};

export default BentoHobbies;
