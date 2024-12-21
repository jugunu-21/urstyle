import Link from 'next/link'; // Make sure to import Link from next/link

const websiteImages = {
  amazon: "https://www.citypng.com/public/uploads/preview/-115963234920bla0rqz8j.png",
  google: "https://www.citypng.com/public/uploads/preview/-115963234920bla0rqz8j.png",
  facebook: "/path/to/facebook-image.jpg",
  meesho: "https://static.startuptalky.com/2024/03/Meesho-The-Journey-of-India-s-Premier-Reselling-App-Startuptalky-1.jpg",
  myntra: 'https://logos-world.net/wp-content/uploads/2022/12/Myntra-Logo.png',
  flipkart: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_320,h_128/https://panchwatifoods.com/wp-content/uploads/2023/05/flipkart-button.png"
} as const;

export function WebsiteButtons({ webLink, link }: { webLink: string, link: string }) {
  const websiteImage = websiteImages[webLink.toLowerCase() as keyof typeof websiteImages]; // Access image based on lowercase webLink

  if (!websiteImage) {
    return null; // Handle case where webLink is not a valid website
  }

  return (

    <Link href={link} target='_blank'>
      <div
        className="h-8 w-28 my-2  flex items-center justify-center rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(${websiteImage})`, // Use image from websiteImages object
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

      </div>
    </Link>

  );
}