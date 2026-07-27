const dealerTools = [
  {
    icon: "ISTA",
    title: "ISTA",
    text: "Диагностика BMW: блоки управления, тест-планы, текущие параметры и проверка связанных систем.",
  },
  {
    icon: "T/L",
    title: "Techstream",
    text: "Дилерская среда Toyota/Lexus для чтения систем, потоковых данных и выполнения активных тестов.",
  },
  {
    icon: "VAG",
    title: "ODIS",
    text: "Работа с Volkswagen, Audi, Skoda и Seat: диагностика двигателя, трансмиссии, кузовной электроники и сервисных блоков.",
  },
  {
    icon: "SM2",
    title: "Сканматик 2 Про",
    text: "Профессиональный интерфейс SM2 Pro для точной работы с отечественными и многими импортными автомобилями.",
  },
  {
    icon: "X431",
    title: "Launch X431",
    text: "Мультимарочный сканер для полного обхода электронных систем легковых автомобилей.",
  },
];

const tuningServices = [
  "Заливка проверенного программного обеспечения после предварительной диагностики.",
  "Stage 1 для АвтоВАЗ: улучшение отклика на педаль газа, более ровная тяга, снижение провалов при разгоне.",
  "Перевод на Евро-2 для любых авто: программное отключение контроля катализатора и вторых лямбда-зондов.",
  "Корректировка температуры включения вентилятора охлаждения для дополнительной защиты двигателя в жаркий период.",
];

const repairServices = [
  "Поиск обрывов и устранение коротких замыканий.",
  "Ремонт и восстановление поврежденной проводки.",
  "Поиск утечки тока, если аккумулятор разряжается после стоянки.",
  "Работа с блоками управления и сложной электроникой через iProg Pro.",
  "Помощь с запуском автомобиля при неисправностях в электрической части.",
];

const visitCases = [
  "автомобиль не запускается во дворе, у офиса или на парковке;",
  "горит Check Engine и требуется первичная оценка состояния автомобиля;",
  "после мойки, мороза или ремонта появились ошибки по электрике;",
  "нужно локализовать простую неисправность без эвакуации автомобиля.",
];

const phoneDisplay = "+7 708 502 00 79";
const phoneHref = "tel:+77085020079";
const whatsappHref =
  "https://wa.me/77085020079?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%20%D0%9D%D1%83%D0%B6%D0%BD%D0%B0%20%D0%B4%D0%B8%D0%B0%D0%B3%D0%BD%D0%BE%D1%81%D1%82%D0%B8%D0%BA%D0%B0%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8F.";
const instagramHref =
  "https://www.instagram.com/avto_electrik_petropavlovsk_15?igsh=MTF4cWIycTBjZGcycg%3D%3D&utm_source=qr";
const address = "Жамбыла 12, Петропавловск, СКО";

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="top-nav" aria-label="Основная навигация">
        <a className="brand" href="#hero" aria-label="На главный экран">
          <span className="brand-mark" aria-hidden="true" />
          <span>AutoDiag SKO</span>
        </a>
        <div className="nav-links">
          <a href="#diagnostic">Диагностика</a>
          <a href="#tuning">Прошивка</a>
          <a href="#repair">Ремонт</a>
          <a href="#visit">Выезд</a>
        </div>
        <a className="nav-cta" href={whatsappHref} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </nav>

      <section className="hero" id="hero">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="scan-rails" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="motion-objects" aria-hidden="true">
          <div className="motion-panel panel-ecu">
            <span>ECU</span>
            <strong>Проверка блоков</strong>
          </div>
          <div className="motion-panel panel-can">
            <span>CAN</span>
            <strong>Связь систем</strong>
          </div>
          <div className="motion-panel panel-dtc">
            <span>DTC</span>
            <strong>Коды и параметры</strong>
          </div>
        </div>

        <div className="hero-content reveal slide-left">
          <p className="eyebrow">СКО, г. Петропавловск</p>
          <h1>Автоэлектрик и компьютерная диагностика в Петропавловске</h1>
          <p className="hero-subtitle">
            Работа в оборудованном боксе, на базе СТО и с выездом к автомобилю
            по городу и пригороду. Диагностика проводится по фактическим
            параметрам автомобиля, с понятным заключением и согласованием
            дальнейших работ.
          </p>
          <div className="hero-actions" aria-label="Контакты мастера">
            <a className="primary-button" href={whatsappHref} target="_blank" rel="noreferrer">
              Написать в WhatsApp
            </a>
            <a className="ghost-button" href="#contacts">
              Жамбыла 12
            </a>
          </div>
          <div className="hero-tags" aria-label="Форматы работы">
            <span>Оборудованный бокс</span>
            <span>Работа на базе СТО</span>
            <span>Выезд автоэлектрика</span>
          </div>
        </div>
      </section>

      <section className="section section-intro" aria-label="Кратко об услугах">
        <div className="section-inner three-up">
          <article className="metric-card reveal lift-depth">
            <span className="card-icon" aria-hidden="true">
              DTC
            </span>
            <h2>Диагностика по данным</h2>
            <p>
              Проверяются ошибки, текущие параметры, работа датчиков и связь
              между блоками. По результату формируется понятное направление
              ремонта.
            </p>
          </article>
          <article className="metric-card reveal lift-depth">
            <span className="card-icon" aria-hidden="true">
              ECU
            </span>
            <h2>Ремонт автоэлектрики</h2>
            <p>
              Проводка, короткие замыкания, утечки тока, запуск автомобиля,
              блоки управления и сложная электронная часть.
            </p>
          </article>
          <article className="metric-card reveal lift-depth">
            <span className="card-icon" aria-hidden="true">
              24V
            </span>
            <h2>Выезд по Петропавловску</h2>
            <p>
              Приеду со сканером к месту неисправности, если автомобиль не
              запускается или требуется первичная проверка электронных систем.
            </p>
          </article>
        </div>
      </section>

      <section className="section diagnostic-section" id="diagnostic">
        <div className="section-inner split">
          <div className="section-copy reveal slide-left">
            <p className="eyebrow">Легковые автомобили</p>
            <h2>Профессиональная компьютерная диагностика легковых авто</h2>
            <p>
              Диагностика выполняется на дилерском и профессиональном
              оборудовании. Это позволяет видеть не только двигатель, но и
              скрытые блоки, параметры в реальном времени, историю ошибок и
              взаимосвязь между системами автомобиля.
            </p>
            <p>
              Цель диагностики — подтвердить причину неисправности и дать
              владельцу прозрачный план дальнейших работ: что проверено, что
              требует ремонта и какие действия целесообразны в первую очередь.
            </p>
          </div>
          <div className="diagnostic-stage reveal slide-right" aria-label="Преимущества диагностики">
            <div className="stage-device" aria-hidden="true">
              <span className="device-line" />
              <span className="device-line" />
              <span className="device-line" />
              <span className="device-chip">ECU</span>
            </div>
            <div className="diagnostic-panel">
              <div>
                <span>01</span>
                <p>Доступ к скрытым блокам и системам автомобиля.</p>
              </div>
              <div>
                <span>02</span>
                <p>Проверка параметров в реальном времени.</p>
              </div>
              <div>
                <span>03</span>
                <p>Связь кодов ошибок с фактическими показаниями датчиков.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-inner tool-grid" aria-label="Оборудование и софт">
          {dealerTools.map((tool) => (
            <article className="tool-card reveal lift-depth" key={tool.title}>
              <span className="card-icon" aria-hidden="true">
                {tool.icon}
              </span>
              <h3>{tool.title}</h3>
              <p>{tool.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section tuning-section" id="tuning">
        <div className="section-inner split reverse">
          <div className="feature-stack reveal slide-left" aria-label="Услуги прошивки ЭБУ">
            {tuningServices.map((service, index) => (
              <div className="feature-row" key={service}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{service}</p>
              </div>
            ))}
          </div>
          <div className="section-copy reveal slide-right">
            <p className="eyebrow">Прошивка ЭБУ</p>
            <h2>Чип-тюнинг и программные решения</h2>
            <p>
              Прошивка выполняется после диагностики и согласования задачи с
              владельцем. Используется подготовленное программное обеспечение
              под конкретную цель: динамика, корректная работа систем или
              адаптация под Евро-2.
            </p>
            <a className="ghost-button inline-link" href="#contacts">
              Обсудить прошивку
            </a>
          </div>
        </div>
      </section>

      <section className="section repair-section" id="repair">
        <div className="section-inner split">
          <div className="section-copy reveal slide-left">
            <p className="eyebrow">Физический ремонт</p>
            <h2>Комплексный ремонт автоэлектрики</h2>
            <p>
              Если причина связана с проводкой, питанием, массой, блоком
              управления или нештатным подключением, проводится проверка
              приборами и восстановление электрической части автомобиля.
            </p>
          </div>
          <div className="repair-list reveal slide-right">
            {repairServices.map((service) => (
              <div className="repair-item" key={service}>
                <span aria-hidden="true">OK</span>
                <p>{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section visit-section" id="visit">
        <div className="section-inner visit-layout">
          <div className="section-copy reveal slide-left">
            <p className="eyebrow">Выезд по городу и пригороду</p>
            <h2>Автомобиль не запускается? Приеду со сканером к месту неисправности</h2>
            <p>
              Выезд подходит для первичной диагностики, проверки питания,
              предохранителей, датчиков и электронных ошибок на месте. Если
              требуется сложный ремонт, после диагностики согласовывается работа
              в боксе или на базе СТО.
            </p>
            <a className="primary-button inline-link" href={whatsappHref} target="_blank" rel="noreferrer">
              Написать в WhatsApp
            </a>
          </div>
          <div className="visit-card reveal lift-depth">
            <h3>Когда выезд особенно актуален</h3>
            <ul>
              {visitCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="footer" id="contacts">
        <div className="section-inner footer-grid">
          <div className="footer-cta reveal slide-left">
            <p className="eyebrow">Контакты</p>
            <h2>
              Нужна точная диагностика автомобиля? Свяжитесь со мной, чтобы
              описать неисправность и согласовать удобное время обращения
            </h2>
            <a className="primary-button" href={whatsappHref} target="_blank" rel="noreferrer">
              Написать в WhatsApp
            </a>
          </div>
          <div className="contact-card reveal slide-right" aria-label="Контактная информация">
            <div>
              <span>Телефон / WhatsApp</span>
              <strong>
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  {phoneDisplay}
                </a>
              </strong>
            </div>
            <div>
              <span>Звонок</span>
              <strong>
                <a href={phoneHref}>{phoneDisplay}</a>
              </strong>
            </div>
            <div>
              <span>Instagram</span>
              <strong>
                <a href={instagramHref} target="_blank" rel="noreferrer">
                  @avto_electrik_petropavlovsk_15
                </a>
              </strong>
            </div>
            <div>
              <span>Адрес бокса / СТО</span>
              <strong>{address}</strong>
            </div>
            <div>
              <span>Режим работы</span>
              <strong>По предварительной записи. Срочный выезд — по наличию времени.</strong>
            </div>
          </div>
        </div>
        <p className="disclaimer">
          Компьютерная диагностика выполняется строго для легковых автомобилей.
          Автоэлектрика и выездные работы доступны по Петропавловску и пригороду.
        </p>
      </footer>
    </main>
  );
}
