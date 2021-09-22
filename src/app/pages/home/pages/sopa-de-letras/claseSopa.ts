export class Sopa{

    readonly dirx = [[ 1, 0], [ 1,-1], [ 0,-1], [-1,-1], [-1, 0], [-1, 1], [ 0, 1], [ 1, 1]];

    readonly nAlto = 10;
    readonly nAncho = 10;
    readonly nSize = 10;
    tablero:any[] = [];
    palabras:any[] = ['FACUNDO','WALTER'];
    listaBk:any = [];
    tableroBk:any = [];
    caracteres:string = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    public generar(){
        console.log(this.tablero);
        this.initTablero();
        console.log("Tablero: " + this.tablero);
        this.distribuir();
        console.log("Tablero: " + this.tablero);
        console.log("Palabras: " + this.palabras);
        console.log("ListaBk: " + this.listaBk);
        console.log("............ tableroBk");
        this.dibuja();
        console.log(this.tableroBk);
        return this.tableroBk;
    }

    private initTablero()
    {
        
        for(var i=0; i < this.nAlto; i++)
        {
            this.tablero[i] = [];
            for(var j=0; j<this.nAncho; j++)
            {
                this.tablero[i][j] = "*";
            }
        }
    }

    private distribuir()
    {
        for(var i=0; i<this.palabras.length; i++)
        {
            var x = parseInt(Math.floor(Math.random() * this.nSize) + "");
            var y = parseInt(Math.floor(Math.random() * this.nSize) + "");
            var r = parseInt(Math.floor(Math.random() * 8) + "");

            if(this.valida(this.palabras[i], x, y, this.dirx[r]))
            {
                this.listaBk.push([x, y, this.dirx[r]]);
                this.insertar(this.palabras[i], x, y, this.dirx[r]);
            }
            else
            {
                i--;
            }
        }
    }

    private valida(palabra:any, xi:number, yi:number, dir:any)
    {
        var len = palabra.length;
        var lReturn = false;

        if(xi + len * dir[0] > 0 && xi + len * dir[0] < this.nSize && yi + len * dir[1] > 0 && yi + len * dir[1] < this.nSize)
        {
            for(var i=0; i<len; i++)
            {
                if(this.tablero[xi + i * dir[0]][yi + i * dir[1]] == "*" || this.tablero[xi + i * dir[0]][yi + i * dir[1]] == palabra.charAt(i))
                {
                    lReturn = true;
                }
                else
                {
                    lReturn = false;
                    break;
                }
            }
        }
        else
        {
            lReturn = false;
        }

        return lReturn;
    }

    private insertar(palabra:any, xi:number, yi:number, dir:any)
    {
        for(var i=0; i<palabra.length; i++)
            this.tablero[xi + i * dir[0]][yi + i * dir[1]] = palabra.charAt(i);
    }

    private dibuja()
    {
        var len = this.caracteres.length;
        for(var i=0; i<this.nSize; i++)
        {
            this.tableroBk[i] = [];
            for(var j=0; j<this.nSize; j++)
            {
                var tmp;
                if(this.tablero[i][j] == "*")
                {
                    tmp = this.caracteres.charAt(parseInt(Math.floor(Math.random() * len) + ""));
                }
                else
                {
                    tmp = this.tablero[i][j];
                }

                this.tableroBk[i][j] = tmp;

            }
        }
    }
}