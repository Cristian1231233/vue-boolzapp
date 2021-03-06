
const app = new Vue({
    el: '#app',
    mounted(){
    //   console.log(this.contacts[0].messages);
    },
    data: {
        contattoAttivo: 0,
        colore:'',
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        newMessag: {
            date: '',
            message: '',
            status: ''
        },
        risposta: {
            date: '',
            message: '',
            status: ''
        }
    },
    methods: {
        ricercaContact(){
           console.log('ciao');
        //    if(ricercaContact().includes(this.contacts.name)){
        //      console.log('visible');
        //    }
        },
        ultimMessg(index){
            let ultimoMessaggio = this.contacts[index].messages[this.contacts[index].messages.length - 1].message;
            if(ultimoMessaggio.length > 30){
                ultimoMessaggio = ultimoMessaggio.substr(0,30) + '...';
            }
            return ultimoMessaggio;
        },
        insertMessag(){
            this.newMessag.date = dayjs().format('DD/MM/YYYY HH:mm:ss');
            this.newMessag.status = 'sent';
            this.contacts[this.contattoAttivo].messages.push(this.newMessag);
            
            this.newMessag = {
                date: '',
                message: '',
                status: ''
            },
            this.contacts[this.contattoAttivo].messages.push(this.risposta);
            
                
              setTimeout(() => {
                this.risposta.message = 'Ok';
                this.risposta.status = 'received';
                this.risposta.date = dayjs().format('DD/MM/YYYY HH:mm:ss');
              }, 1000);
                
                    // this.risposta.message = 'Ok'
                    // this.risposta.status = 'received';
                   
            
                // function rispostaMessag() {
                    
                //     this.risposta = {
                //         date: '',
                //         message: '',
                //         status: ''
                //     }
                // }
                
            
            
            

        
    }
    }
})
// methods: {
//     mostraContatto(index){
//         console.log('indice del contatto', index);
//         this.contattoAttivo = index;

//         this.colore = 'grigio';
//         console.log('grigio');
//     }
// }