import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col items-center px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Про нас</h1>

      <div className="max-w-5xl flex flex-col md:flex-row items-center gap-10">
        {/* Текстова частина */}
        <div className="flex-1 space-y-6 text-lg text-gray-700">
          <p>
            Роки колекціонування та ділінгу дозволили зібрати таку кількість платівок, 
            якої для однієї людини буде забагато, саме тому вирішили, що час не тільки 
            збирати, але й продавати!
          </p>

          <p>
            Ми маємо багато нових та старих релізів, вінтажних, таких яких дуже багато, 
            і таких які трапляються дуже рідко. Від початку 20 сторіччя до сьогодення!
          </p>

          <p>
            З радістю пропонуємо вам великий асортимент, який постійно розширюється. 
            Якщо чогось не знайшли — можливе передзамовлення.
          </p>
        </div>

        {/* Зображення */}
        <div className="flex-1 flex flex-col items-center">
          <div className="relative w-72 h-72">
            <Image
              src="/public/icons/image/owner photo 1x.jpg" // до фото
              alt="Олександр Тумко"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">Авторський проєкт: Олександр Тумко</p>
        </div>
      </div>

      {/* Хештег */}
      <div className="mt-10 text-2xl text-gray-800 font-semibold">
        #VinylTrue
      </div>
    </div>
  );
};

export default About;
