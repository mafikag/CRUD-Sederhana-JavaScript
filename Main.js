/*

finish : fitur show, add, update
Note   : buat besok menambahkan fitur add Delete

*/

const input = require("prompt-sync")({sigint: true}); // mirip scanner kalau di java bikin sebuah var untuk simpen inputan

let temp = true;
let data = [
    {
        nim : "111",
        nama : "Muhamad",
        user : "Mhd",
        pass : "Mhd213"
    },
    {
        nim : "112",
        nama : "Afik",
        user : "Afk",
        pass : "Afk213"
    }
]

const show = (data) =>{
    let urut = 1;
            for(const i of data){
                let{nim, nama, user, pass} = i;
                console.log("Data ke-"+urut);
                console.log(`NIM : ${nim}`);
                console.log(`Nama : ${nama}`);
                console.log(`Username : ${user}`);
                console.log(`Password : ${pass}`);
                urut += 1;
                console.log("");
            };
};

const add = (data) =>{
    try {
    let dumy_data = {};
    console.log("Silahkan memasukkan data baru :");
    let t_nim = input("Masukan NIM : ");
    let t_nama = input("Masukan Nama : ");
    let t_user = input("Masukan Username : ");
    let t_pass = input("Masukan Password : ");
    
    dumy_data = {
        nim : t_nim,
        nama : t_nama,
        user : t_user,
        pass : t_pass
    };

    data.push(dumy_data);
    console.log(`\n-- Data baru berhasil ditambahkan^^ --\n`);
    } catch (error) {
        console.error(`\n-- Data gagal ditambahkan!! --\n`);
    }
};

const update = (data) =>{
    let ubah = input("Silahkan masukan data ke- berapa yang ingin dirubah : ");
    let index = Number(ubah) - 1;
    try {
        let dumy_data = {};
        console.log("\nSilahkan memasukkan data baru :");
        let t_nim = input("Masukan NIM : ");
        let t_nama = input("Masukan Nama : ");
        let t_user = input("Masukan Username : ");
        let t_pass = input("Masukan Password : ");
        
        dumy_data = {
            nim : t_nim,
            nama : t_nama,
            user : t_user,
            pass : t_pass
        };
    
        data.fill(dumy_data,index,index+1);
        console.log(`\n-- Data berhasil diubah^^ --\n`);
        } catch (error) {
            console.error(`\n-- Data gagal diubah!! --\n`);
        }
};

// main program
while(temp == true){

    console.log("=========================================");
    console.log("Hii Welcome to my databank");
    console.log("1. Show");
    console.log("2. Add");
    console.log("3. Update");
    console.log("4. Delete");
    console.log("=========================================");
    let proses = input("Pilih proses yang ingin kamu lakukan: ");
    console.log("=========================================");
    console.log("");

    switch (Number(proses)) {
        case 1:
            show(data);
            break;
        case 2:
            add(data);
            break;
        case 3:
            update(data);
            break;
        case 4:
            
            break;
        default:

            break;
    }

    let pilih = input("Apakah ingin menampilkan data lainnya ?[y/n] ");
    if (pilih != "y") {
        temp = false;
    }
}
console.log("\nThank you and Have a nice day bruhh^^");