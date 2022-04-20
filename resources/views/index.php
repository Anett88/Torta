<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="\..\css\stilus.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="\js\ajax.js"></script>
    <script src="\js\task.js"></script>
    <script src="\js\script.js"></script>
    <meta name="csrf-token" content=<?php $token=csrf_token(); echo $token;?>>
    <title>Kotán Péter</title>
</head>
<body>
    <main>
        <header><h2>Task Manager</h2></header>
        <nav>
            <ul>
                <li><a href="/">Feladatok</a></li>
                <li><a href="user">Felhasználók</a></li>
            </ul>
        </nav>
        <aside>
            <div class="task">
                <h3 class="cim">Cím</h3>
                <p class="leiras"> Leírás</p>
                <div class="tartalom">
                    <div class="vegdatum">Befejezés Dátuma</div>
                    <div class="felhasznalonev">Felhasználó név</div>
                    <div class="statusz">Státusz</div>
                </div>
                <button class="modosit">Módosítás</button>
                <button class="torles">Törlés</button>
            </div>
        </aside>
        <article>
            <section>
                <label for="nkereses">Név szerint keresés:</label><br>
                <input type="text" id="nkereses" name="nkereses"><br>
                <label for="lkereses">Leírás szerint keresés:</label><br>
                <input type="text" id="lkereses" name="lkereses">
            </section>
            <section>
                <label for="rendezes">Dátum szerint rendezés:</label><br>
                <select name="rendezes" id="rendezes">
                    <option value=""></option>
                    <option value="novekvo">Növekvő</option>
                    <option value="csokkeno">Csökkenő</option>                   
                  </select>
            </section><br>
            </section><br>
            </section>
            <div class="tasks">

            </div>
            <section>
                <button class="ujtask">Új task felvétele</button>
                <form id="form" method="POST">
                    <fieldset>
                    <legend>Új task felvétele/Módosítása:</legend>
                    <label for="nev">Task név:</label><br>
                    <input type="text" id="nev" name="nev"><br>
                    <label for="leiras">Leírás:</label><br>
                    <input type="text" id="leiras" name="leiras"><br>
                    <label for="befdate">Befejezés dátuma:</label><br>
                    <input type="date" id="befdate" name="befdate"><br>
                    <label for="felh">Felhasználók:</label><br>
                    <select id="felh">

                    </select><br>
                    <label for="status">Státusz:</label><br>
                    <input type="text" id="status" name="status"><br>
                    <input type="button" id="submit" value="Felvétel">
                    <input type="button" id="msubmit" value="Módosít">
                </fieldset> 
                </form>
            </section>
        </article>
        <footer>Kotán Péter</footer>
    </main>
</body>
</html>