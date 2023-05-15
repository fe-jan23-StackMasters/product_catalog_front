const item = {
  id: 'apple-iphone-11-128gb-black',
  namespaceId: 'apple-iphone-11',
  name: 'Apple iPhone 11 128GB Black',
  capacityAvailable: ['64GB', '128GB', '256GB'],
  capacity: '128GB',
  priceRegular: 1100,
  priceDiscount: 1050,
  colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  color: 'black',
  images: [
    'img/phones/apple-iphone-11/black/00.jpg',
    'img/phones/apple-iphone-11/black/01.jpg',
    'img/phones/apple-iphone-11/black/02.jpg',
    'img/phones/apple-iphone-11/black/03.jpg',
    'img/phones/apple-iphone-11/black/04.jpg',
  ],
  description: [
    {
      title: 'And then there was Pro',
      text: [
        // eslint-disable-next-line max-len
        'A transformative triple-camera system that adds tons of capability without complexity.',
        // eslint-disable-next-line max-len
        'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
      ],
    },
    {
      title: 'Camera',
      text: [
        // eslint-disable-next-line max-len
        'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
      ],
    },
    {
      // eslint-disable-next-line max-len
      title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
      text: [
        // eslint-disable-next-line max-len
        'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
      ],
    },
  ],
  screen: '6.1 IPS',
  resolution: '1792x828',
  processor: 'Apple A13 Bionic',
  ram: '4GB',
  camera: '12 Mp + 12 Mp + 12MP',
  zoom: 'Digital, 5x',
  cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
};

// function getArray(method: (o: object) => string[], obj: object) {
//   const first4 = method(obj).slice(-7, -3);
//   const five = method(obj)[4];
//   const last3 = method(obj).slice(-3);

//   return [...first4, five, ...last3];
// }

// function getArray(method1: (o: object) => string[],
//   method2: (o: object) => string[], obj: object) {
//   const first4 = method1(obj).slice(-7, -3);
//   const five = method1(obj)[4];
//   const last3 = method1(obj).slice(-3);

//   const keys = [...first4, five, ...last3];

//   const first42 = method1(obj).slice(-7, -3);
//   const five2 = method1(obj)[4];
//   const last32 = method1(obj).slice(-3);

//   const values = [...first42, five2, ...last32];

//   return { keys, values };
// }

//   const tech = getArray(Object.keys, Object.values, item);

export const ItemCard = () => {
  // const keysArray = getArray(Object.keys, item);
  // const valuesArray = getArray(Object.values, item);

  return (
    <>
      <section className="settings">
        <div className="grid">
          <div
            className="grid__item grid__phone
        grid__item-tablet--6-12 grid__item-desktop--13-24"
          >
            <div className="settings__container">
              <div className="settings__container-colors">
                <p className="settings__title">Available colors</p>
                <p className="settings__title">ID: 1234567</p>
              </div>

              <div className="settings__colors">
                {item.colorsAvailable.map((color) => (
                  <div key={color} className="settings__button-color">
                    <button
                      className={`settings__color settings__color--${color}`}
                    ></button>
                  </div>
                ))}
              </div>
            </div>

            <p className="settings__title">Select capacity</p>

            <div className="settings__capacities">
              {item.capacityAvailable.map((capacity) => (
                <button key={capacity} className="settings__button-capacity">
                  {capacity}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="grid">
          <div
            className="grid__item grid__phone
      grid__item-tablet--1-16 grid__item-desktop--1-12"
          >
            <div>
              <h2 className="about__title">About</h2>

              <div className="about__content">
                {item.description.map((field) => (
                  <div key={field.title} className="about__container">
                    <h3 className="about__small-title">{field.title}</h3>

                    {field.text.map((paragraph) => (
                      <p key={paragraph} className="about__text">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="grid__item
          grid__item-tablet--1-11 grid__item-desktop--13-24"
          >
            <h2 className="about__title">Tech specs</h2>

            <div className="about__content">
              <div className="about__option">
                <p className="about__option-name">screen</p>
                <p className="about__option-content">{item.screen}</p>
              </div>

              <div className="about__option">
                <p className="about__option-name">resolution</p>
                <p className="about__option-content">{item.resolution}</p>
              </div>

              <div className="about__option">
                <p className="about__option-name">processor</p>
                <p className="about__option-content">{item.processor}</p>
              </div>

              <div className="about__option">
                <p className="about__option-name">RAM</p>
                <p className="about__option-content">{item.ram}</p>
              </div>

              <div className="about__option">
                <p className="about__option-name">Built in memory</p>
                <p className="about__option-content">{item.capacity}</p>
              </div>

              <div className="about__option">
                <p className="about__option-name">camera</p>
                <p className="about__option-content">{item.camera}</p>
              </div>

              <div className="about__option">
                <p className="about__option-name">zoom</p>
                <p className="about__option-content">{item.zoom}</p>
              </div>

              <div className="about__option">
                <p className="about__option-name">cell</p>
                <p className="about__option-content">{item.cell}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
