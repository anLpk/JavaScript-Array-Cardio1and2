    <script>

      const inventors = [
        { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
        { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
        { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
        { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
        { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
        { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
        { first: "Max", last: "Planck", year: 1858, passed: 1947 },
        { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
        { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
        { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
        { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
        { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
      ];

      const people = [
        "Beck, Glenn",
        "Becker, Carl",
        "Beckett, Samuel",
        "Beddoes, Mick",
        "Beecher, Henry",
        "Beethoven, Ludwig",
        "Begin, Menachem",
        "Belloc, Hilaire",
        "Bellow, Saul",
        "Benchley, Robert",
        "Benenson, Peter",
        "Ben-Gurion, David",
        "Benjamin, Walter",
        "Benn, Tony",
        "Bennington, Chester",
        "Benson, Leana",
        "Bent, Silas",
        "Bentsen, Lloyd",
        "Berger, Ric",
        "Bergman, Ingmar",
        "Berio, Luciano",
        "Berle, Milton",
        "Berlin, Irving",
        "Berne, Eric",
        "Bernhard, Sandra",
        "Berra, Yogi",
        "Berry, Halle",
        "Berry, Wendell",
        "Bethea, Erin",
        "Bevan, Aneurin",
        "Bevel, Ken",
        "Biden, Joseph",
        "Bierce, Ambrose",
        "Biko, Steve",
        "Billings, Josh",
        "Biondo, Frank",
        "Birrell, Augustine",
        "Black, Elk",
        "Blair, Robert",
        "Blair, Tony",
        "Blake, William",
      ];
      // 1. Filter the list of inventors for those who were born in the 1500's
      const fifteen = inventors.filter(
        (inventor) => inventor.year >= 1500 && inventor.year < 1600
      );
      // console.log(fifteen);
      // console.table(fifteen);

      // 2. Give us an array of the inventors first and last names
      const fullNames = inventors.map(
        (inventor) => `${inventor.first} ${inventor.last}`
      );
      // console.log(fullNames);

      // 3. Sort the inventors by birthdate, oldest to youngest
      // const ordered = inventors.sort((a, b) => {
      //   if (a.year > b.year) {
      //     return 1;
      //   } else {
      //     return -1;
      //   }
      // });
      const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
      // console.table(ordered);s

      // 4. How many years did all the inventors live all together?
      const livedTotal = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
      }, 0);
      // console.log(livedTotal);

      // 5. Sort the inventors by years lived
      const oldestToYongest = inventors.sort((a, b) => {
        const oldest = a.passed - a.year;
        const yongest = b.passed - b.year;
        return oldest > yongest ? 1 : -1;
      });
      // console.table(oldestToYongest);

      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      // const category = document.querySelector(".mw-category");
      // const links = Array.from(category.querySelectorAll("a"));
      // const de = links
      //   .map((link) => link.textContent)
      //   .filter((streetName) => streetName.includes("de"));
      // console.log(de); .map() is not a function => Getting NodeList
      // That's why links need to be convert to an array => Array.from
      // console.log(de);
      // ["Boulevard de l'Amiral-Bruix", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard Marguerite-de-Rochechouart", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard de la Zone"]
      

      // 7. Sort the people alphabetically by last name
      const alphabetically = people.sort((first, last) => {
        const firstName = first.split(", ");
        // const [aLast, aFirst] = first.split(", ");
        const nextName = last.split(", ");
        return firstName > nextName ? 1 : -1;
      });
      console.log(alphabetically);

      // 8. Sum up the instances of each of these
      const data = [
        "car",
        "car",
        "truck",
        "truck",
        "bike",
        "walk",
        "car",
        "van",
        "bike",
        "walk",
        "car",
        "van",
        "car",
        "truck",
      ];

      const transportation = data.reduce(function (obj, item) {
        if (!obj[item]) {
          obj[item] = 0;
        }
        obj[item]++;
        return obj;
      }, {});
      console.log(transportation);
    </script>
