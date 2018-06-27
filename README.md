# README #

## Plugin Installation ##
To import the Popup plugin, simply copy the "rly-simple-modal" folder and paste that:

```
<link rel="stylesheet" href="rly-simple-modal/style.min.css">
<script src="rly-simple-modal/script.min.js"></script>
```
Jquery Required*

## Creating Html Modal ##
Copy the template below and paste where you want (usually the footer)

```
<!-- Modal -->
<div id="rly-popup-id-00" class="rly-popups-item-box" popupsalvar="save" popupabrir="yeap">
	<div class="rly-popups-item">
		<!-- Modal Content -->
		<a href="#">
			<img src="https://docs.degraupublicidade.com.br/wp-content/uploads/2018/05/popup2.jpg" alt="Esse é um Popup">
		</a>
		<!-- / Modal Content -->
	</div>
</div>
<!-- /Modal -->
```

Now it's easy, just change the content that is between the "Modal Content" comments and done. Modal working. It is recommended change the ID to avoid conflicts.

## Configs ##
We can also change some modal settings fot better experience.

By default, the modal save on the local storage whenever the user clicks the close button or within a link. This causes the popup to open only once. For the modal to be displayed whenever the user enters the page, simply remove the contents of the "popupsave" attribute.
If you want Popup don't show automatically, simply change the attribute "popupabrir" to nope
You can choose to open the modal with a call instead of having it open automatically. Try click here. To do that just create a "a" and put the ID of modal in href. Like: href="#rly-popup-id-0"