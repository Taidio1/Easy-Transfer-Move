const languages = {
    pl: {
      //Home Section
      //Nav
      stronaglowna:"Strona Główna",
      onas:"O Nas",
      kontakt:"Kontakt",
      //Welocome Page
      slogan: "Twój Partner na Rynku Transferowym",


      //About Us Section
      tytulAU:"O Nas",
      //podtytulAU:"",
      Opis1AU:"to specjalistyczna firma zajmująca się kompleksową obsługą transferów piłkarzy spoza Unii Europejskiej. Naszą misją jest wspieranie klubów piłkarskich w pozyskiwaniu utalentowanych zawodników poprzez pełną pomoc we wszystkich niezbędnych procedurach administracyjnych.",
      Opis2AU:"Dzięki nowym regulacjom, które zwiększają możliwości angażowania zagranicznych zawodników do rozgrywek, oferujemy naszym klientom nieporównywalne szanse na wzmocnienie swoich zespołów. Wykorzystujemy nasze bogate doświadczenie i sieć kontaktów na całym świecie, aby pozyskiwać graczy, którzy mogą znacząco podnieść poziom sportowy każdej drużyny.",

      //Services
      Tytul2SE:"Nasze usługi obejmują",
      title1SE:"Uzyskiwanie wiz",
      title2SE:"Pozwolenia na pobyt",
      title3SE:"Analiza i doradztwo",
      title4SE:"Wsparcie prawne",
      title5SE:"Menedżerstwo",
      title6SE:"Pozwolenia na pracę",

      des1AS:"Pomagamy w szybkim i efektywnym uzyskiwaniu wiz dla zawodników spoza Unii Europejskiej, zapewniając pełne wsparcie w procedurach wizowych.",
      des2AS:"Zajmujemy się kompleksowym procesem uzyskiwania pozwoleń na pracę dla piłkarzy, aby mogli legalnie grać w klubach na terenie UE.",
      des3AS:"PraDostarczamy klubom analizy i raporty na temat potencjalnych zawodników, pomagając im podjąć najlepsze decyzje transferowe.",
      des4AS:"Oferujemy pomoc prawną w zakresie umów transferowych, kontraktów zawodniczych oraz wszelkich formalności związanych z międzynarodowymi transferami.",
      des5AS:"Zajmujemy się kompleksową obsługą piłkarzy, od negocjacji kontraktów po doradztwo w sprawach kariery.",
      des6AS:"Oferujemy wsparcie w uzyskiwaniu pozwoleń na pobyt, umożliwiając zawodnikom legalne i komfortowe osiedlenie się w nowym kraju.",

      //Footer
      //Menu footer
      stronaglownaFO:"Strona główna",
      onasFO:"O Nas",
      kontaktFO:"Kontakt",
      //uslugi footer   
    },
    //------------------ENG------------------------
    en: {
      //Home Section
      //Nav
      stronaglowna:"Home",
      onas:"About Us",
      kontakt:"Contact",
      //Welcome Page
      slogan: "Your Partner in the Transfer Market",

      //About Us Section
      tytulAU:"About Us",
      //podtytulAU:"",
      Opis1AU:"is a specialized company dedicated to the comprehensive handling of football player transfers from outside the European Union. Our mission is to support football clubs in acquiring talented players by offering full assistance with all necessary administrative procedures.",
      Opis2AU:"Thanks to new regulations that increase the opportunities for engaging foreign players in competitions, we provide our clients with unparalleled chances to strengthen their teams. We leverage our extensive experience and network of contacts worldwide to bring in players who can significantly elevate the sporting level of any team.",

      //Services
      Tytul2SE:"Our Services Include",
      title1SE:"Visa Acquisition",
      title2SE:"Residence Permits",
      title3SE:"Analysis and Consultancy",
      title4SE:"Legal Support",
      title5SE:"Management",
      title6SE:"Work Permits",

      des1AS:"We assist in quickly and efficiently obtaining visas for players from outside the European Union, providing full support in visa procedures.",
      des2AS:"We handle the comprehensive process of obtaining work permits for football players, enabling them to legally play in clubs within the EU.",
      des3AS:"We provide clubs with analyses and reports on potential players, helping them make the best transfer decisions.",
      des4AS:"We offer legal assistance in the areas of transfer agreements, player contracts, and all formalities related to international transfers.",
      des5AS:"We provide comprehensive player management, from contract negotiations to career advice.",
      des6AS:"We offer support in obtaining residence permits, enabling players to legally and comfortably settle in a new country.",

      //Footer
      //Menu footer
      stronaglownaFO:"Home",
      onasFO:"About Us",
      kontaktFO:"Contact",
      //uslugi footer
    }
  };

  // Początkowy język ustawiony na polski
//let currentLanguage = 'pl';

function updateTexts(language) {
  //Welocome Page
  //Nav
  document.getElementById('stronaglowna').innerText = languages[language].stronaglowna;
  document.getElementById('onas').innerText = languages[language].onas;
  document.getElementById('kontakt').innerText = languages[language].kontakt;
  //About Us + home
  document.getElementById('slogan').innerText = languages[language].slogan;
  document.getElementById('tytulAU').innerText = languages[language].tytulAU;
  document.getElementById('Opis1AU').innerText = languages[language].Opis1AU;
  document.getElementById('Opis2AU').innerText = languages[language].Opis2AU;

  //Services
  document.getElementById('Tytul2SE').innerText = languages[language].Tytul2SE;
  document.getElementById('title1SE').innerText = languages[language].title1SE;
  document.getElementById('title2SE').innerText = languages[language].title2SE;
  document.getElementById('title3SE').innerText = languages[language].title3SE;
  document.getElementById('title4SE').innerText = languages[language].title4SE;
  document.getElementById('title5SE').innerText = languages[language].title5SE;
  document.getElementById('title6SE').innerText = languages[language].title6SE;

  document.getElementById('des1AS').innerText = languages[language].des1AS;
  document.getElementById('des2AS').innerText = languages[language].des2AS;
  document.getElementById('des3AS').innerText = languages[language].des3AS;
  document.getElementById('des4AS').innerText = languages[language].des4AS;
  document.getElementById('des5AS').innerText = languages[language].des5AS;
  document.getElementById('des6AS').innerText = languages[language].des6AS;
  //Footer
  document.getElementById('stronaglownaFO').innerText = languages[language].stronaglownaFO;
  document.getElementById('onasFO').innerText = languages[language].onasFO;
  document.getElementById('kontaktFO').innerText = languages[language].kontaktFO;


}
document.getElementById('language-toggle').addEventListener('change', function() {
    const language = this.checked ? 'en' : 'pl';
    localStorage.setItem('preferredLanguage', language);
    updateTexts(language);
  });

  
  // Uaktualnij teksty na początkowy język (polski) po załadowaniu strony
  window.onload = () => {
    // Odczytaj zapisany język, domyślnie 'pl' (polski)
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'pl';
    updateTexts(savedLanguage);
  
    // Ustaw stan przełącznika zgodnie z zapisanym językiem
    document.getElementById('language-toggle').checked = savedLanguage === 'en';
  };

  //Opcja z przyciskiem
  /*
  document.getElementById('changeLanguage').addEventListener('click', () => {
    // Zmiana języka
    currentLanguage = currentLanguage === 'pl' ? 'en' : 'pl';
    updateTexts();
  });
  
  // Uaktualnij teksty po załadowaniu strony
  window.onload = updateTexts;
  */