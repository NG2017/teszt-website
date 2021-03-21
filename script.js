const pageLoad = () => {

    console.log("ok");

    class Book {
        constructor (title, author, year) {
            this.title = title;
            this.author = author;
            this.year = year;		
        }  
        getSummary() {
            if (this.place) {
                console.log("omg");
                return `${this.title} is written by ${this.author} in ${this.year} in ${this.place}`; 
            } else {
            return `${this.title} is written by ${this.author} in ${this.year}`; 
            } 
        }
        getAge() {
            const age = new Date().getFullYear() - this.year;
            return `${this.title} is ${age} years old.`
        }
        revise(newYear) {
            const originalDate = this.year;
            this.year = newYear;
            this.revised = true;
            return `${this.title} has a new date. (${originalDate} ==> ${this.year})`;
        }

        static country() {
            return `Hungary`;
        }
           
    }

    class Novel extends Book {
        constructor(title, author, year, place, omg, img) {
            super(title, author, year);
            this.place = place;
            if(omg) {this.omg = omg;}
            if(img) {this.img = img;}
        }
    }
    
    const book1 = new Book("Első könyv", "Petőfi", 1847);
    
    console.log(book1);
    console.log(book1.getSummary());
    console.log(book1.getAge());
    console.log(book1.revise(1919));
    console.log(book1);
    console.log(book1.getAge());
    
   // console.log("----------------------------------------------");
   // console.log("error: ");   
   // console.log(book1.country());
    
    console.log(`static function -->`, Book.country());
 
    
    console.log("------------------");
    
    const novel1 = new Novel("FirstNovel", "Mikszath", 1898, "Besztercebanya");
    console.log(novel1);
    console.log(novel1.getSummary());
    console.log(`static function -->`, Novel.country());
    
    
    console.log(Book);
    console.log(Novel);



}
window.addEventListener("load", pageLoad);