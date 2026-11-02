// ini adalah class
class Book {
    // ini adalah properties / attribute
    title: string;
    
    // ini adalah encapsulation, dimana properties stock ini hanya bisa diakses oleh class ini saja
    private stock: number;

    constructor(title: string, stock: number) {
        this.title = title;
        this.stock = stock;
    }

    // ini adalah method sama seperti function tapi method ini hanya bisa diakses oleh object dari class ini 
    borrow(qty: number = 1): void {
        if (this.stock === 0 || this.stock < qty) {
            throw new Error("Buku tidak tersedia atau stok kurang");
        }
        this.stock = this.stock - qty;
        console.log(
            `Buku ${this.title} berhasil dipinjam, sisa stock: ${this.stock}`
        );
    }
}

// new Book adalah object
const book = new Book("Laskar Pelangi", 5);

// memanggil method borrow
book.borrow(2);

export {};