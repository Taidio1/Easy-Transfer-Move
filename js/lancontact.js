const languages = {
    pl: {
      //Home Section
      //Nav
      stronaglowna:"Strona Główna",
      onas:"O Nas",
      kontakt:"Kontakt",
      //Welocome Page
      Tytul: "Kontakt",

      //Contact
      AdressCO:"Adres",
      TelefonCO:"Email & Telefon",
      //Formularz
      BtnWiadCO:"Wyślij",

      //Footer
      //Menu footer
      stronaglownaFO:"Menu",
      onasFO:"O Nas",
      kontaktFO:"Kontakt",    
    },
    //------------------ENG------------------------
    en: {
        //Home Section
      //Nav
      stronaglowna:"Home Page",
      onas:"About Us",
      kontakt:"Contact",
      //Welocome Page
      Tytul: "Contact",

      //Contact
      AdressCO:"Address",
      TelefonCO:"Email & Phone",
      //Formularz
      BtnWiadCO:"Send Message",

      //Footer
      //Menu footer
      stronaglownaFO:"Home Page",
      onasFO:"About Us",
      kontaktFO:"Contact",
    }
  };






function updateTexts(language) {
    //Nav
    document.getElementById('stronaglowna').innerText = languages[language].stronaglowna;
    document.getElementById('onas').innerText = languages[language].onas;
    document.getElementById('kontakt').innerText = languages[language].kontakt;
    //Home & Form
    document.getElementById('Tytul').innerText = languages[language].Tytul;
    document.getElementById('AdressCO').innerText = languages[language].AdressCO;
    document.getElementById('TelefonCO').innerText = languages[language].TelefonCO;

    document.getElementById('BtnWiadCO').innerText = languages[language].BtnWiadCO;
    //footer
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