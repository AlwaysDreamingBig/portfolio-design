import Image from "next/image";

const BentoSkills = () => {
  return (
    <div className="w-full flex-grow bg-black/90 p-2">
      {/* Grid Container */}
      <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-2 w-full h-full">
        
        {/* Skill Item */}
        <div className="w-full h-full rounded-lg flex flex-col items-center justify-center p-4 border bg-red-200">
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" 
            alt="C/C++ Programming" 
            className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
            loading="lazy"
            width={64} 
            height={64} 
          />
          <p className="hidden lg:block">C/C++ Programming</p>
        </div>

        {/* Skill Item */}
        <div className="w-full h-full rounded-lg flex flex-col items-center justify-center p-4 border bg-red-200">
          <Image 
            src="https://w7.pngwing.com/pngs/837/18/png-transparent-logo-java-runtime-environment-programming-language-runtime-system-oracle-text-logo-desktop-wallpaper-thumbnail.png" 
            alt="Java Programming" 
            className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
            loading="lazy"
            width={64} 
            height={64} 
          />
          <p className="hidden lg:block">Java Programming</p>
        </div>

        {/* Skill Item */}
        <div className="w-full h-full rounded-lg flex flex-col items-center justify-center p-4 border bg-red-200">
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" 
            alt="Git Version Control" 
            className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
            loading="lazy"
            width={64} 
            height={64} 
          />
          <p className="hidden lg:block">Git Version Control</p>
        </div>

        {/* Skill Item */}
        <div className="w-full h-full rounded-lg flex flex-col items-center justify-center p-4 border bg-red-200">
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" 
            alt="Python Programming" 
            className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
            loading="lazy"
            width={64} 
            height={64} 
          />
          <p className="hidden lg:block">Python Programming</p>
        </div>

        {/* Skill Item */}
        <div className="w-full h-full rounded-lg flex flex-col items-center justify-center p-4 border bg-red-200">
          <Image 
            src="https://img.icons8.com/?size=100&id=6kZdxe7t8OL1&format=png&color=000000" 
            alt="MS Office" 
            className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
            loading="lazy"
            width={64} 
            height={64} 
          />
          <p className="hidden lg:block">MS Office</p>
        </div>

        {/* Skill Item */}
        <div className="w-full h-full rounded-lg flex flex-col items-center justify-center p-4 border bg-red-200">
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" 
            alt="JavaScript" 
            className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
            loading="lazy"
            width={64} 
            height={64} 
          />
          <p className="hidden lg:block">JavaScript</p>
        </div>

        {/* Skill Item */}
        <div className="w-full h-full rounded-lg flex flex-col items-center justify-center p-4 border bg-red-200">
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
            alt="React.js" 
            className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
            loading="lazy"
            width={64} 
            height={64} 
          />
          <p className="hidden lg:block">React.js</p>
        </div>

        {/* Skill Item */}
        <div className="w-full h-full rounded-lg flex flex-col items-center justify-center p-4 border bg-red-200">
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" 
            alt="Express.js" 
            className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
            loading="lazy"
            width={64} 
            height={64} 
          />
          <p className="hidden lg:block">Express.js</p>
        </div>

        {/* Skill Item */}
        <div className="w-full h-full rounded-lg flex flex-col items-center justify-center p-4 border bg-red-200">
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" 
            alt="Node.js" 
            className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
            loading="lazy"
            width={64} 
            height={64} 
          />
          <p className="hidden lg:block">Node.js</p>
        </div>

        {/* Skill Item */}
        <div className="w-full h-full rounded-lg flex flex-col items-center justify-center p-4 border bg-red-200">
          <Image 
            src="https://img.icons8.com/?size=100&id=19672&format=png&color=000000" 
            alt="MySQL" 
            className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
            loading="lazy"
            width={64} 
            height={64} 
          />
          <p className="hidden lg:block">MySQL</p>
        </div>

        {/* Skill Item */}
        <div className="w-full h-full rounded-lg flex flex-col items-center justify-center p-4 border bg-red-200">
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" 
            alt="Figma Collaboration" 
            className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
            loading="lazy"
            width={64} 
            height={64} 
          />
          <p className="hidden lg:block">Figma Collaboration</p>
        </div>

        {/* Skill Item */}
        <div className="w-full h-full rounded-lg flex flex-col items-center justify-center p-4 border bg-red-200">
          <Image 
            src="https://img.icons8.com/?size=100&id=33039&format=png&color=000000" 
            alt="AWS Cloud" 
            className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
            loading="lazy"
            width={64} 
            height={64} 
          />
          <p className="hidden lg:block">AWS (Beginner)</p>
        </div>

        {/* Skill Item */}
        <div className="w-full h-full rounded-lg flex flex-col items-center justify-center p-4 border bg-red-200">
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" 
            alt="Tailwind CSS" 
            className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
            loading="lazy"
            width={64} 
            height={64} 
          />
          <p className="hidden lg:block">Tailwind CSS</p>
        </div>

        {/* Skill Item */}
        <div className="w-full h-full rounded-lg flex flex-col items-center justify-center p-4 border bg-red-200">
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" 
            alt="MongoDB" 
            className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
            loading="lazy"
            width={64} 
            height={64} 
          />
          <p className="hidden lg:block">MongoDB</p>
        </div>

        <div className="w-full h-full rounded-lg flex flex-col items-center justify-center p-4 border bg-red-200">
          <Image 
            src="https://img.icons8.com/?size=100&id=bpip0gGiBLT1&format=png&color=000000" 
            alt="OpenCV" 
            className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
            loading="lazy"
            width={64} 
            height={64} 
          />
          <p className="hidden lg:block">OpenCV</p>
        </div>

        <div className="w-full h-full rounded-lg flex flex-col items-center justify-center p-4 border bg-red-200">
          <Image 
            src="https://img.icons8.com/?size=100&id=VLKafOkk3sBX&format=png&color=000000" 
            alt="Azure DevOps" 
            className="w-16 h-16 sm:w-20 sm:h-20 mb-2"
            loading="lazy"
            width={64} 
            height={64} 
          />
          <p className="hidden lg:block">Azure DevOps</p>
        </div>
      </div>
    </div>
  );
};

export default BentoSkills;
