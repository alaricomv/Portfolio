import Typewriter from 'typewriter-effect';
import { ArrowDown } from 'lucide-react';
import './css/Hero.css';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
       <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient mb-4">
            Alarico Mercado Vazquez
        </h1>
      {/* Typewriter effect */}
      <h2 className="text-2xl sm:text-3xl font-medium text-center text-muted-foreground">
        <Typewriter
          options={{
            strings: ['Full-Stack Developer', 'Software Developer'],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </h2>

      <p className="mt-6 text-base sm:text-lg text-center max-w-xl text-muted-foreground">
        I am a passionate developer with experience in building web applications.
      </p>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span> Scroll </span>
      <ArrowDown className="h-5 w-5 text-primary"/>
      </div>
    </section>
  );
};
