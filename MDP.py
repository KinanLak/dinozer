alpha = {'a':'ah','b':'bw','c':'sc','d':'hd','e':'ew','f':'zf','g':'gr','h':'jh','i':'yi','j':'jz','k':'qu','l':'pl','m':'mh','n':'nh','o':'ow','p':'pf','q':'ku','r':'rt','s':'sw','t':'tz','u':'ua','v':'hv','w':'wr','x':'sk','y':'oÃ¯','z':'bz',"à":"ha","é":"we","è":"eh","ç":"cs","@":"@","ê":"ee","ô":"oo","â":"aa","î":"ii","û":"uu","ÿ":"yy","ù":"au"}

listAlphaKey = list(alpha.keys())
listAlphaVal = list(alpha.values())

# TRADUCTION : Français VERS Dino
tradMot = input("Mot à  traduire en DINO :\n>> ") # MOT A TRADUIRE
nvMot = '' # SA TRADUCTION

for lettre in tradMot: # Programme de traduction
    if lettre in alpha:
        nvMot += alpha[lettre]
    elif lettre.lower() in alpha:
        nvMot += (alpha[lettre.lower()][0].upper() + alpha[lettre.lower()][1])
    else:
        nvMot += lettre

print("En Dino : "+nvMot) # Affichage de la traduction


# TRADUCTION : Dino VERS Français
tradInverse = input("Mot à traduire en FR :\n>> ") # MOT A TRADUIRE
nvMot2 = '' # SA TRADUCTION
indice = 0

for i in range(len(list(tradInverse))): # Programme de traduction
    if i+1 == len(list(tradInverse)):
        break
    if indice+1 >= len(list(tradInverse)):
        break
    lettre = list(tradInverse)[indice]+list(tradInverse)[indice+1]
    if lettre[0] in [" ","'",",",".","-","(",")",'‘','"',"1","2","3","4","5","6","7","8","9","0","_","/","|","?","!",";",":","+","=","€","$","%"]:
        nvMot2 += lettre[0]
    elif lettre[1] in [" ","'",",",".","-","(",")",'‘','"',"1","2","3","4","5","6","7","8","9","0","_","/","|","?","!",";",":","+","=","€","$","%"]:
        nvMot2 += lettre[1]
    elif lettre in listAlphaVal:
        nvMot2 += listAlphaKey[listAlphaVal.index(lettre)]
        indice += 1
    elif lettre.lower() in listAlphaVal:
        nvMot2 += listAlphaKey[listAlphaVal.index(lettre.lower())].upper()
        indice += 1
    indice += 1
        
print("En FR : "+nvMot2) # Affichage de la traduction
 
