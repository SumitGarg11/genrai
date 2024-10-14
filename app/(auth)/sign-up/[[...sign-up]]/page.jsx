import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
      
      {/* Image Section - Only visible on large screens (lg and above) */}
      <section className="relative hidden lg:flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
        <img
          src={"./image.png"}
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          alt="Background"
        />
      </section>

      {/* Form Section - Always visible */}
      <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
        <div className="max-w-xl lg:max-w-3xl">

          {/* Logo for small and large screens */}
          <div className="flex justify-center lg:justify-start mb-6 lg:mb-12">
            <a href="/">
              {/* Responsive logo */}
              <img 
                src={"./genrai.png"}
                alt="Logo"
                className="w-45 -ml-8 sm:w-40 md:w-48 lg:w-56 xl:w-64"  // Adjusts size based on screen width
              />
            </a>
          </div>

          {/* Sign-in Form */}
          <SignUp />
        </div>
      </main>
    </div>
  </section>
  )
  
}