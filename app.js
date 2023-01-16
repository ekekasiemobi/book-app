const app = Vue.createApp({
   data() {
    return{
        showBooks:true,
        title: 'The Final Empier',
        author: 'Brandon Sanderson',
        age: 45,
        books:[
            {title: 'name of the wind', author:'patrick rothfuss',img: 'img/1.jpg', isFav: true},
            {title: 'the way of kings', author:'brandon sanderson',img: 'img/2.jpg', isFav: false},
            {title: 'the final empire', author:'brandon sanderson',img: 'img/3.jpg', isFav: true}, 
        ],
        url: 'https://twitter.com/Kassy_Francis'
    }
   },
   methods:{
    changeTitle(title){
        // this.title = 'words of Randiance'
        this.title = title
    }
   },
   methods:{
    toggleShowBooks(){
        this.showBooks= !this.showBooks 
    }
   },
   handleEvent(event){
    console.log('event ')
   },
   computed:{
    filteredBooks(){
        return this.books.filter((book) => book.isFav)
        
    }
   }
})

app.mount('#app')