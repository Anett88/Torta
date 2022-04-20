<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="\..\css\stilusAdmin.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="\js\ajax.js"></script>
    <script src="\js\user.js"></script>
    <script src="\js\scriptAdmin.js"></script>
    <meta name="csrf-token" content=<?php $token=csrf_token(); echo $token;?>>
    <title>Kotán Péter</title>
</head>
<body>
    <main>
        <header><h2>Felhasználók</h2></header>
        <nav>
            <ul>
                <li><a href="/">Feladatok</a></li>
                <li><a href="user">Felhasználók</a></li>
            </ul>
        </nav>
        <aside>
            <table>
                <tr>
                    <td class="id">Id</td>
                    <td class="name">Name</td>
                    <td><button class="modosit">Módosítás</button></td>
                    <td><button class="torles">Törlés</button></td>
                    
                
                </tr>
            </table>
        </aside>
        <article>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </article>
        <footer>Kotán Péter</footer>
    </main>
</body>
</html>