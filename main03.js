new Vue({
el:'#id1',
data:
{
playerHealth:100,
monasterHealth:100,
gameIsRunning:false,
turns: []
},
methods:
{

	startGame:function()
	{
		this.gameIsRunning=true;
	    this.playerHealth=100;
        this.monasterHealth=100;
        this.turns=[];
	},
	attack:function()
	{
       var damage=this.calculateDamage(3,10);
      this.monasterHealth -= damage;
        this.turns.unshift({
        isPlayer:true,
        text:'player hits monster for' + damage
        });
       if(this.checkWin())
       {
         return;
       }
      this.playerHealth -= this.calculateDamage(5,12);

       this.checkWin();
	},
	specAttack:function()
	{
		var damage=this.calculateDamage(10,20);
       this.monasterHealth -= damage;
          this.turns.unshift({
        isPlayer:true,
        text:'player hits monster hard for' + damage
        });
       if(this.checkWin())
       {
         return;
       }
         this.monasterAttack();
	},
	heal:function()
	{
		if(this.playerHealth<=90)
		{
		this.playerHealth+=10;
		}
		else
		{
		this.playerHealth = 100;
		}
        this.turns.unshift({
        isPlayer:true,
        text:'player heals for 10' + damage
        });

   this.monasterAttack();
	},
	giveUp:function()
	{
     this.gameIsRunning =false;
	},
	monasterAttack:function()
	{
		var damage=this.calculateDamage(5,12);
       this.playerHealth -= damage;

       this.checkWin();
               this.turns.unshift({
        isPlayer:false,
        text:'Monster hits player for' + damage
        });
	},
	calculateDamage: function(min,max)
	{
    return Math.max(Math.floor(Math.random() * max) + 1 , min) ;
	},
	checkWin:function()
	{
		if(this.monasterHealth <= 0)
		{
			if(confirm('You Won! New Game'))
			{
			this.startGame();
			}
			else
			{
				this.gameIsRunning = false;
			}
			return true;

		}
		else if(this.playerHealth <= 0)
		{
		if(confirm('You lost! New Game'))
		{
			this.startGame();
		}
		else
		{
		this.gameIsRunning = false;
		}
		return true;
		}
		return false;
	}
}
});