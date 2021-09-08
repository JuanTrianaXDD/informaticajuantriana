let Dado = 0
let Cuenta_Dias = 0
let Cantidad_Lluvia = 0
let Cantidad_Dias = 0
while (Cuenta_Dias <= 1825) {
    Cuenta_Dias += 1
    Dado = randint(1, 6)
    Cantidad_Lluvia += Dado
}
let Promedio = Cantidad_Lluvia / 1825
basic.showNumber(Promedio)
