
var app = new Vue({
    el:'#app',
    data:{
        playerHealth:100,
        monsterHealth:100,
        monsterCss:'monster-turn',
        playerCss:'player-turn',
        gameStart : false,
        msg:[]
    },
    computed:{

    },
    methods:{
        gameOn(){
            this.gameStart = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.msg = []
        },
        attack(){
            this.calculateDamage(10 ,10)

        },
        spcAttack(){
            this.calculateDamage(8,15)
        },
        heal(){
            this.calculateDamage(5,0)
            let playerHeal = Math.floor(Math.random()*10);
            this.playerHealth += playerHeal
        },
        giveUp(){
            this.gameStart = false;
            this.msg =[{monster:"Game Has been Canceled"}]
        },
        calculateDamage(max, min){
            let playerDamage = Math.floor(Math.random()*max);
            let monsterDamage = Math.floor(Math.random()*min);
            this.playerHealth -= playerDamage
            this.monsterHealth -= monsterDamage
            this.msg.unshift({
                    monster : 'Monster Get Damage ' + monsterDamage,
                    player : 'Player Get Damage ' + playerDamage
                }
            )

            if(this.playerHealth<0 ){
                this.msg = [{monster:"You Have been Defeated"}]
                this.gameStart = false
            }else if (this.monsterHealth<0){
                this.msg =[{player:"YOU WIN"}]
                this.gameStart = false
            }
        }
    }

})
