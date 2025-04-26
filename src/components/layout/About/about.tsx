import Image from "next/image";
import css from "./about.module.css";

const About = () => {
  return (
    <div className={css.container}>
      <h1 className={css.heading}>Про нас</h1>

      <div className={css.contentWrapper}>
        <div className={css.textSection}>
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

        <div className={css.imageSection}>
          <div className={css.imageWrapper}>
            <Image
              src="/public/icons/image/owner photo 1x.jpg" // до фото
              alt="Олександр Тумко"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className={css.caption}>Авторський проєкт: Олександр Тумко</p>
        </div>
      </div>

      <div className={css.hashtag}>#VinylTrue</div>
    </div>
  );
};

export default About;