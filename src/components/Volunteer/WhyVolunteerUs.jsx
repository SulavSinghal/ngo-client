import React from "react";
// If you use icons from a library such as @heroicons/react, you can import them here
// For demonstration, we'll use simple inline SVGs

const features = [
  {
    icon: (
      <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_245_494)">
<g clip-path="url(#clip1_245_494)">
<path d="M21.7313 43.9777L4.79062 28.162C4.39687 27.7964 4.02188 27.4027 3.675 26.9995H11.8312C13.95 26.9995 15.8625 25.7245 16.6781 23.7652L17.6625 21.4027L22.2844 31.6683C22.6406 32.4652 23.4188 32.9808 24.2906 32.9902C25.1625 32.9995 25.9594 32.5214 26.3531 31.7433L30.3281 23.7839L30.4875 24.1027C31.3781 25.8839 33.1969 27.0089 35.1844 27.0089H44.9812C44.6344 27.412 44.2594 27.8058 43.8656 28.1714L26.925 43.9777C26.2219 44.6339 25.2938 44.9995 24.3281 44.9995C23.3625 44.9995 22.4344 44.6339 21.7313 43.9777ZM47.55 22.4995H35.175C34.8938 22.4995 34.6312 22.3402 34.5 22.087L32.325 17.7464C31.9406 16.987 31.1625 16.4995 30.3094 16.4995C29.4562 16.4995 28.6781 16.9777 28.2937 17.7464L24.4125 25.5089L19.6312 14.8308C19.2656 14.0152 18.4406 13.4902 17.55 13.5089C16.6594 13.5277 15.8531 14.062 15.5062 14.8964L12.525 22.0495C12.4125 22.3308 12.1312 22.5089 11.8312 22.5089H1.82812C1.58438 22.5089 1.35938 22.5464 1.14375 22.612C0.609375 21.112 0.328125 19.5183 0.328125 17.8964V17.3527C0.328125 10.7995 5.0625 5.21203 11.5219 4.1339C15.7969 3.4214 20.1469 4.81828 23.2031 7.87453L24.3281 8.99953L25.4531 7.87453C28.5094 4.81828 32.8594 3.4214 37.1344 4.1339C43.5938 5.21203 48.3281 10.7995 48.3281 17.3527V17.8964C48.3281 19.4808 48.0656 21.037 47.55 22.4995Z" fill="#1F817C"/>
</g>
</g>
<defs>
<clipPath id="clip0_245_494">
<rect width="48" height="48" fill="white" transform="translate(0.328125)"/>
</clipPath>
<clipPath id="clip1_245_494">
<path d="M0.328125 0H48.3281V48H0.328125V0Z" fill="white"/>
</clipPath>
</defs>
</svg>

    ),
    title: "Make an Impact",
    description: "Your time and skills can directly change someone's life for the better.",
  },
  {
    icon: (
      <svg width="61" height="48" viewBox="0 0 61 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_245_505)">
<path d="M14.4844 0C16.4735 0 18.3812 0.790176 19.7877 2.1967C21.1942 3.60322 21.9844 5.51088 21.9844 7.5C21.9844 9.48912 21.1942 11.3968 19.7877 12.8033C18.3812 14.2098 16.4735 15 14.4844 15C12.4953 15 10.5876 14.2098 9.18107 12.8033C7.77455 11.3968 6.98438 9.48912 6.98438 7.5C6.98438 5.51088 7.77455 3.60322 9.18107 2.1967C10.5876 0.790176 12.4953 0 14.4844 0ZM48.9844 0C50.9735 0 52.8812 0.790176 54.2877 2.1967C55.6942 3.60322 56.4844 5.51088 56.4844 7.5C56.4844 9.48912 55.6942 11.3968 54.2877 12.8033C52.8812 14.2098 50.9735 15 48.9844 15C46.9953 15 45.0876 14.2098 43.6811 12.8033C42.2746 11.3968 41.4844 9.48912 41.4844 7.5C41.4844 5.51088 42.2746 3.60322 43.6811 2.1967C45.0876 0.790176 46.9953 0 48.9844 0ZM0.984375 28.0031C0.984375 22.4813 5.46562 18 10.9875 18H14.9906C16.4812 18 17.8969 18.3281 19.1719 18.9094C19.05 19.5844 18.9938 20.2875 18.9938 21C18.9938 24.5812 20.5687 27.7969 23.0531 30C23.0344 30 23.0156 30 22.9875 30H2.98125C1.88437 30 0.984375 29.1 0.984375 28.0031ZM38.9812 30C38.9625 30 38.9438 30 38.9156 30C41.4094 27.7969 42.975 24.5812 42.975 21C42.975 20.2875 42.9094 19.5938 42.7969 18.9094C44.0719 18.3188 45.4875 18 46.9781 18H50.9812C56.5031 18 60.9844 22.4813 60.9844 28.0031C60.9844 29.1094 60.0844 30 58.9875 30H38.9812ZM21.9844 21C21.9844 18.6131 22.9326 16.3239 24.6204 14.636C26.3082 12.9482 28.5974 12 30.9844 12C33.3713 12 35.6605 12.9482 37.3483 14.636C39.0362 16.3239 39.9844 18.6131 39.9844 21C39.9844 23.3869 39.0362 25.6761 37.3483 27.364C35.6605 29.0518 33.3713 30 30.9844 30C28.5974 30 26.3082 29.0518 24.6204 27.364C22.9326 25.6761 21.9844 23.3869 21.9844 21ZM12.9844 45.4969C12.9844 38.5969 18.5812 33 25.4812 33H36.4875C43.3875 33 48.9844 38.5969 48.9844 45.4969C48.9844 46.875 47.8687 48 46.4812 48H15.4875C14.1094 48 12.9844 46.8844 12.9844 45.4969Z" fill="#1F817C"/>
</g>
<defs>
<clipPath id="clip0_245_505">
<path d="M0.984375 0H60.9844V48H0.984375V0Z" fill="white"/>
</clipPath>
</defs>
</svg>
    ),
    title: "Build a Community",
    description: "Connect with like-minded people who care about creating a positive future.",
  },
  {
    icon: (
 <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_245_514)">
<g clipPath="url(#clip1_245_514)">
<path d="M48.6562 3C48.6562 13.65 40.725 22.4531 30.45 23.8125C29.7844 18.8062 27.5812 14.2875 24.3281 10.7531C27.9188 4.34062 34.7812 0 42.6562 0H45.6562C47.3156 0 48.6562 1.34062 48.6562 3ZM0.65625 9C0.65625 7.34062 1.99687 6 3.65625 6H6.65625C18.2531 6 27.6562 15.4031 27.6562 27V30V45C27.6562 46.6594 26.3156 48 24.6562 48C22.9969 48 21.6562 46.6594 21.6562 45V30C10.0594 30 0.65625 20.5969 0.65625 9Z" fill="#1F817C"/>
</g>
</g>
<defs>
<clipPath id="clip0_245_514">
<rect width="48" height="48" fill="white" transform="translate(0.65625)"/>
</clipPath>
<clipPath id="clip1_245_514">
<path d="M0.65625 0H48.6562V48H0.65625V0Z" fill="white"/>
</clipPath>
</defs>
</svg>

    ),
    title: "Grow With Purpose",
    description: "Learn, lead, and develop while giving back to society.",
  },
];

const WhyVolunteerSection = () => (
  <section className="py-14 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-3 text-[#1F316C]" style={{ fontFamily: "'Merriweather', serif" }}>
        Why Volunteer With Us
      </h2>
      <p className="text-center text-gray-600 mb-10" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
        Discover how volunteering with Mwanam can transform lives &#8212; including your own.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-lg shadow-sm p-8 text-center flex flex-col items-center"
          >
            {item.icon}
            <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Merriweather', serif" }}>{item.title}</h3>
            <p className="text-gray-600 text-sm" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyVolunteerSection;
