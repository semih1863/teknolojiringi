"use client";
import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  // İlk slider için state
  const [currentSlide, setCurrentSlide] = useState(0);

  // İkinci slider için state
  const [currentSlide2, setCurrentSlide2] = useState(0);

  // İlk slider için ileri ve geri buton fonksiyonları
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === projects.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? projects.length - 1 : prevSlide - 1
    );
  };

  // İkinci slider için ileri ve geri buton fonksiyonları
  const nextSlide2 = () => {
    setCurrentSlide2((prevSlide) =>
      prevSlide === projects2.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide2 = () => {
    setCurrentSlide2((prevSlide) =>
      prevSlide === 0 ? projects2.length - 1 : prevSlide - 1
    );
  };

  // Slider içerikleri
  const projects = [
    {
      image: "arac.jpeg",
      title: "ADIM 1",
      description:
        "İlk olarak, iki tekerlekli ve iki motorlu araç kitimizi monte ediyoruz. Bu araçta kullanılan motorlar regülatörlü motorlardır. Regülatörlü motorlar, hızlarını veya torklarını düzenleyebilmek için bir kontrol mekanizmasına sahiptir. Bu kontrol mekanizması, genellikle bir regülatör veya hız kontrol cihazı olarak adlandırılır. Bu motorlar, kullanıcıların istedikleri hızı veya gücü ayarlayabilmelerini sağlar. Ayrıca, regülatörlü motorlar daha istikrarlı ve düzenli bir hız sağlayabilir, böylece aracın hareketi daha kontrollü olur. Bu özellikleri sayesinde, araç daha dengeli ve yönlendirilebilir bir şekilde hareket edebilir.",
    },
    {
      image: "9vpilnew.png",
      title: "ADIM 2",
      description:
        "9V'luk pilimizin artı kablosunu anahtarımızın bir ucuna lehimleyip, diğer ucuna bir kablo lehimlemesi gerçekleştirerek anahtarımızı aktif hale getiriyoruz. Bu sayede anahtarımızı kullanarak devreyi açıp kapatabiliriz. Anahtar, devre elemanlarının bağlantılarını kontrol etmek için kullanılan basit bir elektrik anahtarıdır. Pilin artı kutbundan gelen akımı anahtara yönlendirerek, devreyi açık konuma getirir ve böylece devre elemanlarının çalışmasını sağlar. Bu işlem, elektrik akımının devre üzerinde kontrol edilmesini ve istenildiğinde devrenin açılmasını veya kapanmasını sağlar.Aynı olayı 6V luk pillerimiz içinde gerçekleştiriyoruz. Aynı olayı 6V luk pillerimiz içinde gerçekleştiriyoruz.",
    },
    {
      image: "renksensor.png",
      title: "ADIM 3",
      description:
        "Renkleri algılamamızı sağlayan sensörümüzü araç kitinin ön alt kısmına çift taraflı bant ile yapıştırıyoruz. Sensörün net değer alabilmesi için yerden 2-3 cm yüksekliğinde olması gerekmektedir. Sensörün üç adet pini bulunmaktadır: VCC (Güç girişi), GND (Topraklama girişi) ve Vout (Çıkış değeri). Bu pinleri uygun şekilde araç kitine bağladıktan sonra sensör, renkleri algılayabilir ve bu bilgiyi işlemeye hazır hale getirir.",
    },
    {
      image: "breadboard.png",
      title: "ADIM 4",
      description:
        "Arduino Nano gibi mikrodenetleyicilerle birden fazla sensör kullandığımızda, mini breadboardları kullanarak yer tasarrufu sağlarız. Breadboardun bir sırasını tamamen 5V ve diğer sırayı tamamen GND (topraklama) hattı yaparak, sensörlerin güç ve toprak bağlantılarını düzenleriz",
    },
    {
      image: "ultrasonik.png",
      title: "ADIM 5",
      description:
        "Önde ve solda olmak üzere iki adet ultrasonik sensörümüz bulunmaktadır. Her bir sensörün VCC, TRIG, ECHO ve GND olmak üzere toplamda 4 pin girişi bulunmaktadır. Arduino Nano üzerinde bu sensörlerin bağlantılarını yapmak için şu adımları izliyoruz: Her sensörün VCC pinini Arduino Nano'nun 5V pinine bağlıyoruz. Her sensörün GND pinini Arduino Nano'nun GND (topraklama) pinine bağlıyoruz. Her sensörün TRIG pinini Arduino Nano üzerindeki bir dijital pin (örneğin, D2 ve D3) ile bağlıyoruz. Her sensörün ECHO pinini Arduino Nano üzerindeki bir dijital pin (örneğin, D4 ve D5) ile bağlıyoruz. Bu şekilde her iki sensörün güç, toprak ve sinyal bağlantılarını Arduino Nano'ya bağlayarak sensörleri Arduino ile iletişim kurmaya hazır hale getiriyoruz.",
    },
    {
      image: "sumo.png",
      title: "ADIM 6",
      description:
        "Motorlardan lehimlediğimiz kabloları motor sürücüsüne bağladıktan sonra, Arduino Nano ile haberleşmesini sağlamak için motor sürücüsünden gelen 4 pinini Arduino Nano'ya bağlıyoruz. Bu pinler genellikle adımlı motor sürücülerinde kullanılır ve adımlı motorun dönüşünü kontrol etmek için kullanılır. Bu pinler arasında adımların ileri ve geri hareketini kontrol eden adım ve yön pinleri bulunur. Arduino Nano'ya bağladıktan sonra, Arduino kodu aracılığıyla motor sürücüsüne gerekli komutları göndererek motorların hareketini kontrol edebiliriz. Bu sayede Arduino, motorların hızını, yönünü ve adımlarını belirleyebilir, böylece istenilen hareketleri gerçekleştirebiliriz.",
    },
    {
      image: "codenew.png",
      title: "ADIM 7",
      description:
        "Arduino IDE kullanarak robotumuza renk ve ultrasonik sensörlerden gelen değerleri okuyarak uygun komutlar yazıyoruz. Bu komutlar genellikle, sensörlerden gelen verilere bağlı olarak robotun hareketini kontrol etmek veya çevresel koşullara tepki vermek için kullanılır. Örneğin, renk sensöründen belirli bir renk algılandığında robotun belli bir yöne dönmesi veya ultrasonik sensörlerin belirli bir mesafeden daha yakın bir nesne algıladığında ileri hareket edip saldırması gibi komutlar verilebilir. Arduino IDE, basit ve anlaşılır bir programlama diline sahip olduğu için, bu tür işlevleri kodlamak oldukça kolaydır. Bu sayede, robotumuzun çevresini algılayarak etkili bir şekilde hareket etmesini sağlayabiliriz.",
    },
  ];

  const projects2 = [
    {
      image: "ivme.jpeg",
      title: "El Hareketi ile Hareket Eden Araç",
      description:
        "MPU6050 GY-521, 6 eksenli bir sensör modülüdür ve hem 3 eksenli bir ivmeölçer hem de 3 eksenli bir jiroskop içerir. I2C iletişim protokolü ile çalışır ve mikrodenetleyicilere kolayca bağlanabilir. İvmeölçer ±2g'den ±16g'ye kadar ve jiroskop ±250 ila ±2000 derece/saniye aralıklarında ölçüm yapabilir. Dahili bir sıcaklık sensörü vardır ve düşük güç tüketimiyle çalışır.Bu modül, drone ve robot stabilizasyonu, hareket kontrollü cihazlar, spor ve sağlık izleme, navigasyon ve titreşim analizi gibi çeşitli uygulamalarda kullanılır. Yüksek hassasiyet, uygun fiyat ve geniş uygulama alanı, MPU6050 GY-521'in başlıca avantajlarıdır. Ayrıca, açık kaynaklı kütüphaneler ve çevrimiçi kaynaklar sayesinde kolayca entegre edilebilir.",
    },
    {
      image: "nrf.jpeg",
      title: "ADIM 2",
      description:
        "NRF24L01+ PA + LNA SMA Anten, 2.4 GHz frekansında çalışan bir kablosuz haberleşme modülüdür. Güç amplifikatörü (PA) ve düşük gürültülü amplifikatörü (LNA) sayesinde daha uzun menzil ve daha iyi sinyal alımı sağlar. Harici SMA anteni ile birlikte, açık alanda birkaç kilometreye kadar iletişim kurabilir. Düşük güç tüketimi ile batarya ile çalışan uygulamalar için uygundur ve çeşitli projelerde, özellikle kablosuz sensör ağları ve uzaktan kumanda sistemlerinde kullanılır.",
    },
    {
      image: "alici.jpeg",
      title: "ADIM 3",
      description:
        "Bu projemizde biri gönderici biri alıcı olacak şekilde iki ayrı cihazımız olacağından alıcı olan araç kitimizi yapmaya başlayalım. İki tekerler ve iki motorlu olan araç kitimizi monte edip sürücü kartı ile bağlantılarımız kurup az yer kaplaması için arduino nanoya bağlıyoruz. Gönderici ile haberleşmesi içinde NRF modülümüzüde arduino nanomuza bağlıyoruz. Aracımızın daha güçlü olması için biri aduino için olacak olan 9V pilimizi diğeri ise motorlar için olacak olan 7.4V pillerimizi anahtar ile lehimleyip gerekli bağlantılarımızı sağlıyoruz.",
    },
    {
      image: "gonderici.jpeg",
      title: "ADIM 4",
      description:
        "Şimdi ise gönderici olan eldivenimizi yapmaya başlayalım. Burada sadece arduino nano kullanacağımızdan 6V ile verilen güç bize yetecektir. Aynı şekilde güç kaynağımıza anahtarlama işlemi yaptıktan sonra ivme sensörümüz ve NRF modülümüzü arduino nanomuza bağlıyoruz.",
    },
    {
      image: "codenew.png",
      title: "ADIM 5",
      description:
        "Göndericimiz olan eldiven için kodlarımızı yazıyoruz. Kodları aşağıdaki linkten GitHup hesabıma ulaşarak alabilirsiniz.",
    },
    {
      image: "codenew.png",
      title: "ADIM 6",
      description:
        "Alıcı olan aracımız için kodlarımızı yazıyoruz. Kodları aşağıdaki linkten GitHup hesabıma ulaşarak alabilirsiniz.",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-50"
      id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Projelerimiz
      </h1>

      {/* İlk Slider */}
      <div className="flex flex-col md:flex-row gap-10 px-10 slider">
        {/* Slider with images */}
        <div className="w-full md:w-1/2 relative">
          <img
            src={projects[currentSlide].image}
            alt={projects[currentSlide].title}
            className="w-full h-full object-cover rounded-lg"
            style={{ width: "100%", height: "400px" }}
          />
          {/* İleri butonu */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-0 bg-white bg-opacity-50 p-2 rounded-full focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          {/* Geri butonu */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-0 bg-white bg-opacity-50 p-2 rounded-full focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        {/* Slider with text information */}
        <div
          className="w-full md:w-1/2"
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            fontWeight: "bold",
          }}>
          <h2 className="text-2xl font-bold mb-2 text-center">
            {projects[currentSlide].title}
          </h2>
          <p className="text-gray-600">{projects[currentSlide].description}</p>
        </div>
      </div>

      {/* İkinci Slider */}
      <div className="flex flex-col md:flex-row gap-10 px-10 slider mt-20">
        {/* Slider with images */}
        <div className="w-full md:w-1/2 relative">
          <img
            src={projects2[currentSlide2].image}
            alt={projects2[currentSlide2].title}
            className="w-full h-full object-cover rounded-lg"
            style={{ width: "100%", height: "400px" }}
          />
          {/* İleri butonu */}
          <button
            onClick={nextSlide2}
            className="absolute top-1/2 -translate-y-1/2 right-0 bg-white bg-opacity-50 p-2 rounded-full focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          {/* Geri butonu */}
          <button
            onClick={prevSlide2}
            className="absolute top-1/2 -translate-y-1/2 left-0 bg-white bg-opacity-50 p-2 rounded-full focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        {/* Slider with text information */}
        <div
          className="w-full md:w-1/2"
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            fontWeight: "bold",
          }}>
          <h2 className="text-2xl font-bold mb-2 text-center">
            {projects2[currentSlide2].title}
          </h2>
          <p className="text-gray-600">
            {projects2[currentSlide2].description}
          </p>
        </div>
      </div>

      <h1
        className="Welcome-text text-[15px]"
        style={{ padding: "20px", marginTop: "20px", fontWeight: "bold" }}>
        <a href="https://github.com/semih1863">
          Araç Kodlarına Erişmek İçin Tıklayın!
        </a>
      </h1>
    </div>
  );
};

export default Projects;
