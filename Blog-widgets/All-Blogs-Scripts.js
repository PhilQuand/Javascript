<!-- alignement vignette et texte -->
<style>
.VignetteBR.flex {
    display: flex; 
    align-items: flex-start;
    width: 100%; 
}
.VignetteBR.flex .divImg {
    max-width: 200px; 
    //width: 30%; 
    width: 100%; 
    //margin-bottom: 1em;
}
.VignetteBR.flex.left .divImg {
    margin-right: 1em;
}
.VignetteBR.flex.right {
    flex-direction: row-reverse;
}
.VignetteBR.flex.right .divImg {
    margin-left: 0.5em;
}
.VignetteBR.flex .divText, .VignetteBR.flex .divImg img {
    width: 100%;
}
@media (max-width: 1100px) {
    .VignetteBR.flex {
        display: block; 
    }
    .VignetteBR.flex .divText, .VignetteBR.flex .divImg {
        display: block;
        width: 100%; 
        max-width: 100%;
        margin-bottom: 1em;
    }
    .VignetteBR.flex .divImg img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%; 
    }
}
.VignetteBR.float {
    display: block; 
}
.VignetteBR.float .divImg {
    max-width: 200px; 
    width: 40%; 
    margin-top: 0.5em;
    //margin-bottom: 0.5em;
}
.VignetteBR.float.left .divImg {
    margin-right: 1em;
    float: left;
}
.VignetteBR.float.right .divImg {
    margin-left: 1em;
    float: right;
}
.VignetteBR.float .divText, .VignetteBR.float .divImg img {
    width: 100%; 
}
@media (max-width: 1100px) {
    .VignetteBR.float .divText, .VignetteBR.float .divImg {
        display: block;
        width: 100%; 
        max-width: 100%;
        margin-bottom: 1em;
    }
    .VignetteBR.float .divImg img {
        display: block;
        //max-width: 200px; 
        margin-left: auto;
        margin-right: auto;
        //width: 80%; 
    }
}
.VignetteBR .relief img {
    box-shadow: rgba(0, 0, 0, 0.8) 10px 5px 25px;
}
</style>
<!--style>
/* pour création pdf */
/*.fr-FR, .en-EN, .de-DE, .es-ES, .it-IT, .pt-PT {
 display: none;
}*/
.VignetteBR {
    display: block; 
}
.VignetteBR .divImg {
    max-width: 200px; 
    width: 40%; 
    margin-top: 0.5em;
    //margin-bottom: 0.5em;
}
.VignetteBR.left .divImg {
    margin-right: 1em;
    float: left;
}
.VignetteBR.right .divImg {
    margin-left: 0.5em;
    float: right;
}
.VignetteBR .divText, .VignetteBR .divImg img {
    width: 100%; 
}
.VignetteBR .relief img {
    box-shadow: rgba(0, 0, 0, 0.8) 10px 5px 25px;
</style-->
<style>
/* pour rendre les vidéo "responsive" (voir sbipsetlab...) */
.video-wrapper {
	width: 560px;
	max-width: 100%;
    margin: 2em auto 2em auto;
}
.video-container {
	position: relative;
	padding-bottom: 56.25%;
	//padding-top: 30px;
	height: 0;
	overflow: hidden;
}

.video-container iframe,  
.video-container object,  
.video-container embed {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>
