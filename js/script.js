var firstnameElt = document.getElementById("firstname");
firstnameElt.value = "MonPseudo";

document.getElementById('submit').onclick = function resumeForm() {
  alert('bonjour !');
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let city = document.getElementById("city").value;
  alert('Nom : ' + lastname + '\nPrénom : ' + firstname + '\nVille : ' +  city);
};
2 index.html
@@ -21,7 +21,7 @@
          </li>
          <li>
            <label for="city">Ville :
              <input type="text" name="city" id="city" placeholder="Ville">
              <input type="text" name="city" id="city" placeholder="Ville"/>
            </label>
          </li>
        </ul>

//La fonction, une fois déclarée ne fera rien. Il faut l'appeler pour qu'elle s'exécute, c'est ce qu'on fait avec le onclick du HTML.
