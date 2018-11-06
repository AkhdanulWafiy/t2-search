var Student = [
    {
        NIS: '170700792',
        Name:'M.Akhdanul Wafiy',
        Avatar:'2.jpg'
    },
    {
        NIS: '170700790',
        Name:'Revan Apriyandi',
        Avatar:'2.jpg'
    },
    {
        NIS: '170700799',
        Name:'M.Lutfi',
        Avatar:'2.jpg'
    },
    {
        NIS: '170700818',
        Name:'Hamizaz',
        Avatar:'2.jpg'
    },
    {
        NIS: '170700714',
        Name:'Al Azim',
        Avatar:'2.jpg'
    },
    {
        NIS: '170700800',
        Name:'Risky Tuak',
        Avatar:'2.jpg'
    },
    {
        NIS: '170700823',
        Name:'Satria Ramadanol',
        Avatar:'2.jpg'
    },
    {
        NIS: '170700781',
        Name:'Arif Habibi',
        Avatar:'2.jpg'
    },
    {
        NIS: '170700788',
        Name:'Khairul Mustafa',
        Avatar:'2.jpg'
    },
    {
        NIS: '170700808',
        Name:'Yogi',
        Avatar:'2.jpg'
    },
    {
        NIS: '170700801',
        Name:'Risky Ananda',
        Avatar:'2.jpg'
    },
    {
        NIS: '170700922',
        Name:'Andika',
        Avatar:'2.jpg'
    },
    {
        NIS: '170700823',
        Name:'M.Farid',
        Avatar:'2.jpg'
    },
    {
        NIS: '170700713',
        Name:'puad',
        Avatar:'2.jpg'
    },
    {
        NIS: '170700834',
        Name:'kolbi',
        Avatar:'2.jpg'
    },
    {
        NIS: '170700838',
        Name:'Wendi',
        Avatar:'2.jpg'
    },
    {
        NIS: '170700757',
        Name:'Ridwan',
        Avatar:'2.jpg'
    },
    {
        NIS: '170700806',
        Name:'Zandri Potui',
        Avatar:'2.jpg'
    },
    {
        NIS: '1306578',
        Name:'Pak Asrul H.',
        Avatar:'img/'
    }
]
var ketik = document.getElementById('search').value
for(var i = o ; i <Student.length ; i = i + i){
    if (student[i].NIS == ketik) {
        document.getElementById('Tampil').textContent = Student [i].Name
        document.getElementById('Tampil1').textContent = Student [i].NIS
        document.getElementById('Tampil2').setAttribute("src", Student [i].Avatar
    }else if(student[i].Name == ketik){
        document.getElementById('Tampil').textContent = Student [i].Name
        document.getElementById('Tampil1').textContent = Student [i].NIS
        document.getElementById('Tampil2').setAttribute("src", Student[i].Avatar
    }
}
    //ini untuk proses pencarian data ketika tombol ditekan
    function cari(){
    }