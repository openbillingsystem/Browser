crudData = {
		loanproduct: {
				editTemplateNeeded: true,
				refreshListNeeded: true,
				dialogWidth: 850,
				dialogHeight: 550
			},
		savingproduct: {
				editTemplateNeeded: true,
				refreshListNeeded: true,
				dialogWidth: 850,
				dialogHeight: 550
			},
		depositproduct: {
				editTemplateNeeded: true,
				refreshListNeeded: true,
				dialogWidth: 850,
				dialogHeight: 550
			},	
		office: {
				editTemplateNeeded: true,
				refreshListNeeded: true,
				dialogWidth: 600,
				dialogHeight: 400
			},
		fund: {
				editTemplateNeeded: false,
				refreshListNeeded: true,
				dialogWidth: 600,
				dialogHeight: 275
			},
		code: {
				editTemplateNeeded: false,
				refreshListNeeded: true,
				dialogWidth: 600,
				dialogHeight: 275
			},			
	     configuration: {
				editTemplateNeeded: false,
				refreshListNeeded: true,
				dialogWidth: 600,
				dialogHeight: 275
		 },	
		employee: {
				editTemplateNeeded: true,
				refreshListNeeded: true,
				dialogWidth: 600,
				dialogHeight: 325
			},
		charge: {
				editTemplateNeeded: true,
				refreshListNeeded: true,
				dialogWidth: 600,
				dialogHeight: 450
			},
		user: {
				editTemplateNeeded: true,
				refreshListNeeded: true,
				dialogWidth: 1000,
				dialogHeight: 550
			},
		role: {
				editTemplateNeeded: false,
				refreshListNeeded: true,
				dialogWidth: 1000,
				dialogHeight: 550
			},
		orgCurrency: {
				editTemplateNeeded: false,
				refreshListNeeded: false,
				dialogWidth: 900,
				dialogHeight: 400
			},
		permission: {
				editTemplateNeeded: false,
				refreshListNeeded: false,
				dialogWidth: 1200,
				dialogHeight: 500
			},
		officetransaction: {
				editTemplateNeeded: true,
				refreshListNeeded: true,
				dialogWidth: 900,
				dialogHeight: 400
			},
		bulkLoanReassignment: {
				editTemplateNeeded: true,
				refreshListNeeded: false,
				dialogWidth: 600,
				dialogHeight: 500	
		},
		datatable: {
				editTemplateNeeded: false,
				refreshListNeeded: true
		},

	    chargecode : {
				editTemplateNeeded : true,
				refreshListNeeded : true,
				dialogWidth : 750,
				dialogHeight :280
		},
			
		taxmap : {
				editTemplateNeeded : true,
				refreshListNeeded : true,
				dialogWidth : 750,
				dialogHeight : 280
		},
       subscription: {
				editTemplateNeeded: true,
				refreshListNeeded: true,
				dialogWidth: 600,
				dialogHeight: 275
		},
		servicemaster: {
				editTemplateNeeded: true,
				refreshListNeeded: true,
				dialogWidth: 750,
				dialogHeight: 280
		},
		plan: {
			
			    editTemplateNeeded: true,
				refreshListNeeded: true,
				dialogWidth: 850,
				dialogHeight: 500
		},	
		    	
		region: {
		  	    editTemplateNeeded: true,
			    refreshListNeeded: true,
				dialogWidth: 1000,
				dialogHeight: 500
		},
		eventmaster: {
				editTemplateNeeded: true,
				refreshListNeeded: true,
				dialogWidth: 850,
				dialogHeight: 450
	     },	
		 item: {
				editTemplateNeeded: true,
				refreshListNeeded: true,
				dialogWidth: 750,
				dialogHeight: 270 
		 },  
					  
	     countrycurrency: {
				editTemplateNeeded: true,
				refreshListNeeded: true,
				dialogWidth: 750,
				dialogHeight: 270 
		},  
		prospect : {
				editTemplateNeeded : true,
				refreshListNeeded : true,
				dialogWidth : 850,
				dialogHeight : 500
		},
		prospects : {
				editTemplateNeeded : true,
				refreshListNeeded : true,
				dialogWidth : 850,
				dialogHeight : 500
		},
			
		report: {
			   editTemplateNeeded: true,
			   refreshListNeeded: true
		},
		batch : {
			  editTemplateNeeded : true,
			  refreshListNeeded : true,
			  dialogWidth : 850,
			  dialogHeight : 300
		},
		discount : {
			  editTemplateNeeded : true,
			  refreshListNeeded : true,
			  dialogWidth : 750,
			  dialogHeight : 280
		},
		randomgenerator: {
			editTemplateNeeded: true,
			refreshListNeeded: true,
			dialogWidth:800,
			dialogHeight:280
		},
			
};

saveSuccessFunctionReloadClient =  function(data, textStatus, jqXHR) {
						  	$("#dialog-form").dialog("close");
		  					showILClient(currentClientId );
				  		};

saveSuccessFunctionReloadClientListing =  function(data, textStatus, jqXHR) {
	$("#dialog-form").dialog("close");
	showILClientListing();
};

formErrorFunction = function(jqXHR, textStatus, errorThrown) {
	handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
};


generalErrorFunction = function(jqXHR, textStatus, errorThrown) {
alert("complete after  - for when an error is got but not on a create/update form");
				    	//handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
				};


function executeAjaxRequest(url, verbType, jsonData, successFunction, errorFunction) { 

	var jqxhr = $.ajax({ 
				url : baseApiUrl + url, 
				type : verbType, //POST, GET, PUT or DELETE 
				contentType : "application/json; charset=utf-8", 
				dataType : 'json', 
				data : jsonData, 
				cache : false, 
				beforeSend : function(xhr) { 
					
					  $(".myclass").attr("disabled", true);
					  
					//$(".mylink").prop('disabled');
					  $('a').bind('click', function(e) {
						  setTimeout(function() {
								
							}, 3000);
						});


				    var button = $(".ui-dialog-buttonpane button:contains('Save')");
				      $(button).button("disable");
				      
						if (tenantIdentifier > "") xhr.setRequestHeader("X-Mifos-Platform-TenantId", tenantIdentifier); 
						if (base64 > "") xhr.setRequestHeader("Authorization", "Basic " + base64); 
					}, 
				success : successFunction,
				 complete:function(xhr){
				      var button = $(".ui-dialog-buttonpane button:contains('Save')");
				      
				      $(button).button("enable");
				      
				     
				    },
				error : errorFunction 
			}); 
}

function executeAjaxRequestForImageDownload(url, verbType,successFunction, errorFunction) { 

	var jqxhr = $.ajax({ 
				url : baseApiUrl + url, 
				type: verbType, //POST, GET, PUT or DELETE 
				data: null,
				beforeSend : function(xhr) { 
						if (tenantIdentifier > "") xhr.setRequestHeader("X-Mifos-Platform-TenantId", tenantIdentifier); 
						if (base64 > "") xhr.setRequestHeader("Authorization", "Basic " + base64); 
					}, 
				success : successFunction, 
				error : errorFunction 
			}); 
}

function executeAjaxOctetStreamDownloadRequest(url) { 
	 $.fileDownload(baseApiUrl + url +"?tenantIdentifier="+tenantIdentifier, {
        //preparingMessageHtml: "Please wait while your document is downloaded...",
        //failMessageHtml: "There was a problem downloading the document, please try again.",
        httpMethod: "GET"
    });
}

function executeMultipartUploadAjaxRequest(url, verbType, formData, successFunction, errorFunction) { 
	var jqxhr = $.ajax({ 
				url : baseApiUrl + url, 
				type : verbType, //POST, GET, PUT or DELETE 
				contentType : false, 
				processData: false,
				data : formData, 
				cache : false, 
				beforeSend : function(xhr) { 
						if (tenantIdentifier > "") xhr.setRequestHeader("X-Mifos-Platform-TenantId", tenantIdentifier); 
						if (base64 > "") xhr.setRequestHeader("Authorization", "Basic " + base64); 
					}, 
				success : successFunction, 
				error : errorFunction 
			}); 
}

// load html functions
function showMainContainer(containerDivName, username) {

	var htmlVar = '<div id="logowrapper">';
	htmlVar += '	<span style="float: left">';
	htmlVar += '		<img style="float:left; border: 0;" alt="" src="resources/mifos.jpg"/>';
	htmlVar += '	</span>';
	htmlVar += '</div>';
	htmlVar += '<div id="navwrapper">';
	htmlVar += '<ul id="nav" class="floatleft">';
	

	
	if (jQuery.MifosXUI.showMenu("INVENTORYMENU"))    
		//   htmlVar += '	<li><a href="unknown.html" onclick="refreshInventoryItemDetails(' + "'" + 'content' + "'" + ');return false;">' + doI18N("link.topnav.inventory") + '</a></li>';
			htmlVar += '  <li><a href="unknown.html" onclick="setInventoryContent(' + "'" + 'content' + "'" + ');return false;">' + doI18N("link.topnav.ims") + '</a></li>';
		
	
	if (jQuery.MifosXUI.showMenu("ProspectsMenu"))
		htmlVar += '	<li><a 	href="unknown.html" onclick="refreshTableView(' + "'prospect'" + ');return false;">' + doI18N("link.topnav.prospect") + '</a></li>';
		//htmlVar += '	<li><a href="unknown.html" onclick="showILClientListing();return false;">' + doI18N("link.topnav.clients") + '</a></li>';

	if (jQuery.MifosXUI.showMenu("ClientsMenu"))
		htmlVar += '	<li><a href="unknown.html" onclick="showILClientListing();return false;">' + doI18N("link.topnav.clients") + '</a></li>';
	
	if (jQuery.MifosXUI.showMenu("TICKETMENU") == true)    
		   htmlVar += '	<li><a href="unknown.html" onclick="showTickets(' + "'" + 'content' + "'" + ');return false;">' + doI18N("link.topnav.tickets") + '</a></li>';
	
	if (jQuery.MifosXUI.showMenu("GroupsMenu")) {
		htmlVar += '	<li class="dmenu"><a href="unknown.html" onclick="return false;">' + doI18N("link.topnav.groupings") + '</a>';
		htmlVar += '		<ul>';
		
		if (jQuery.MifosXUI.showMenu("CollectionSheetMenu")) {
			htmlVar += '  <li><a href="unknown.html" onclick="showCollectionSheet();return false;">' + doI18N("link.topnav.collection.sheet") + '</a></li>';
		}
		
		htmlVar += '	<li><a href="unknown.html" onclick="showNewCenterListing();return false;">' + doI18N("link.topnav.centers") + '</a></li>';
		htmlVar += '	<li><a href="unknown.html" onclick="showGroupListing();return false;">' + doI18N("link.topnav.groups") + '</a></li>';
		htmlVar += '	<li><a href="unknown.html" onclick="showCommunalBankListing();return false;">' + doI18N("link.topnav.communalbanks") + '</a></li>';
		
		htmlVar += '		</ul>';
		htmlVar += '	</li>';
	}
	
	if (jQuery.MifosXUI.showMenu("CheckerMenu")) {
		htmlVar += '	<li><a href="unknown.html" onclick="auditSearch(' + "'makerchecker'" + ');return false;">' + doI18N("link.topnav.makercheckerinbox") + '</a></li>';
	}
	
	if (jQuery.MifosXUI.showMenu("UserAdminMenu") == true || jQuery.MifosXUI.showMenu("OrgAdminMenu") == true || jQuery.MifosXUI.showMenu("SysAdminMenu") == true) {
		htmlVar += '	<li class="dmenu"><a href="unknown.html" onclick="return false;">' + doI18N("link.topnav.administration") + '</a>';
		htmlVar += '		<ul>';
		
		/*if (jQuery.MifosXUI.showMenu("UserAdminMenu") == true)
			htmlVar += '	<li><a href="unknown.html" onclick="setUserAdminContent(' + "'" + 'content' + "'" +');return false;">' + doI18N("link.topnav.users") + '</a></li>';*/
		
		if (jQuery.MifosXUI.showMenu("SysAdminMenu") == true)
			htmlVar += '	<li><a href="unknown.html" onclick="setSysAdminContent(' + "'" + 'content' + "'" + ');return false;">' + doI18N("link.topnav.system") + '</a></li>';
		
		if (jQuery.MifosXUI.showMenu("OrgAdminMenu") == true)
			htmlVar += '	<li><a href="unknown.html" onclick="setOrgAdminContent(' + "'" + 'content' + "'" + ');return false;">' + doI18N("link.topnav.organisation") + '</a></li>';
		    
		
		
		htmlVar += '		</ul>';
		htmlVar += '	</li>';
	}
	
	if (jQuery.MifosXUI.showMenu("AccountingMenu") == true)
		htmlVar += '  <li><a href="unknown.html" onclick="setAccountingContent(' + "'" + 'content' + "'" + ');return false;">' + doI18N("link.topnav.accounting") + '</a></li>';
	
	if (jQuery.MifosXUI.showMenu("UPLOADSTATUSMENU") == true)    
		   htmlVar += '	<li><a href="unknown.html" onclick="refreshClientUploadStatus(' + "'" + 'content' + "'" + ');return false;">' + doI18N("link.topnav.uploadxls") + '</a></li>';
	/*if (jQuery.MifosXUI.showMenu("GRNMENU") == true)    
		   htmlVar += '	<li><a href="unknown.html" onclick="refreshInventoryGrn(' + "'" + 'content' + "'" + ');return false;">' + doI18N("link.topnav.grn") + '</a></li>';*/
	
	if (jQuery.MifosXUI.showMenu("SCHEDULINGMENU") == true)    
		   htmlVar += '	<li><a href="unknown.html" onclick="showBatchJobDetails(' + "'" + 'content' + "'" + ');return false;">' + doI18N("link.topnav.schedule") + '</a></li>';
	

	if (jQuery.MifosXUI.showMenu("ReportsMenu") == true)
	{
		htmlVar += '	<li class="dmenu"><a href="unknown.html" onclick="return false;">' + doI18N("link.reports") + '</a>';
		htmlVar += '		<ul>';
		htmlVar += '			<li><a href="unknown.html" onclick="showILReporting();return false;">' + doI18N("link.reports.all") + '</a></li>';
		htmlVar += '			<li><a href="unknown.html" onclick="showILReporting(' + "'" + 'Client' + "'" + ');return false;">' + doI18N("link.reports.client") + '</a></li>';
		htmlVar += '			<li><a href="unknown.html" onclick="showILReporting(' + "'" + 'Loan' + "'" + ');return false;">' + doI18N("link.reports.order") + '</a></li>';
		htmlVar += '			<li><a href="unknown.html" onclick="showILReporting(' + "'" + 'Fund' + "'" + ');return false;">' + doI18N("link.reports.ticket") + '</a></li>';
		
		if (jQuery.MifosXUI.showMenu("AccountingMenu") == true)
			htmlVar += '      		<li><a href="unknown.html" onclick="showILReporting(' + "'" + 'Accounting' + "'" + ');return false;">' + doI18N("link.reports.accounting") + '</a></li>';
		
		htmlVar += '		</ul>';
		htmlVar += '	</li>';
	}
	
	htmlVar += '	<li><a href="unknown.html" onclick="return false;">' + doI18N("label.tenant.name") + ': ' + tenantIdentifier + '</a></li>';
    
	htmlVar += '</ul>';
	htmlVar += '<ul id="nav" class="floatright">';
	
	htmlVar += '    <li id="search_element" class="sb_wrapper">';

    htmlVar += '           <input id="sb_input" name="sb_input" class="text ui-widget-content ui-corner-all sb_input" type="text" style="height:14px;" placeholder="Search" />';
    htmlVar += '           <button type="submit" class="globalsearchbtn ui-icon-search" id="globalsearchbtn" name="globalsearchbtn" title="Global Search">Search</button>';
    htmlVar += '           <ul class="sb_dropdown" >';
    htmlVar += '                <li class="sb_filter">Filter your search</li>';
    htmlVar += '                <li><input type="checkbox" name="gsresource" value="CLIENTS"/><label for="clients">Clients</label></li>';
    htmlVar += '                <li><input type="checkbox" name="gsresource" value="DEVICES"/><label for="loans">Devices</label></li>';
    htmlVar += '                <li><input type="checkbox" name="gsresource" value="CLIENTIDENTIFIERS"/><label for="clientIdentifiers">Client Identifiers</label></li>';
   	if (jQuery.MifosXUI.showMenu("GroupsMenu")) {
    	htmlVar += '                <li><input type="checkbox" name="gsresource" value="GROUPS"/><label for="groups">Groups</label></li>';    	
    }
    htmlVar += '           </ul>';

    htmlVar += '    </li>';
	
	htmlVar += '	<li class="dmenu"><a href="unknown.html" onclick="return false;">' + doI18N("link.topnav.culture") + '</a>';
	htmlVar += '		<ul>';
	htmlVar += '			<li><a href="unknown.html" onclick="setCultureReshowFirstPage(' + "'" + 'en' + "'" + ');return false;">English</a></li>';
	htmlVar += '			<li><a href="unknown.html" onclick="setCultureReshowFirstPage(' + "'" + 'fr' + "'" + ');return false;">French</a></li>';
	htmlVar += '			<li><a href="unknown.html" onclick="setCultureReshowFirstPage(' + "'" + 'es' + "'" + ');return false;">Spanish</a></li>';
	htmlVar += '			<li><a href="unknown.html" onclick="setCultureReshowFirstPage(' + "'" + 'es-PE' + "'" + ');return false;">Spanish (Peru)</a></li>';
	htmlVar += '			<li><a href="unknown.html" onclick="setCultureReshowFirstPage(' + "'" + 'pt' + "'" + ');return false;">Portuguese</a></li>';
	htmlVar += '			<li><a href="unknown.html" onclick="setCultureReshowFirstPage(' + "'" + 'zh' + "'" + ');return false;">Chinese</a></li>';
	htmlVar += '		</ul>';
	htmlVar += '	</li>';
	htmlVar += '	<li><a href="unknown.html" onclick="showAccountSettings();return false;" class="dmenu"><div id=displayUN>' + currentUserName + '</div></a>';
	htmlVar += '		<ul>';
	htmlVar += '			<li><a href="unknown.html" onclick="showAccountSettings();return false;">' + doI18N("link.topnav.account.settings") + '</a></li>';
	htmlVar += '		</ul>';
	htmlVar += '	</li>';
	htmlVar += '	<li><a href="unknown.html" onclick="signOut(' + "'" + containerDivName + "'" + ');return false;">' + doI18N("link.signout") + '</a></li>';
	htmlVar += '</ul>';
	htmlVar += '<br class="clear">';
	htmlVar += '</div><div style="float:none; clear:both;">';
	htmlVar += '	<div id="spacer" style="line-height: 15px;">&nbsp;</div>';
	htmlVar += '	<div id="content"></div>';
	htmlVar += '</div>';

	$("#" + containerDivName).html(htmlVar);

	$(function() {
        var $ui         = $('#search_element');

        $ui.find('.sb_input').bind('focus click',function(){
            $ui.find('.sb_dropdown')
               .show();
        });

        $ui.bind('mouseleave',function(){
            $ui.find('.sb_dropdown')
               .hide();
        });

    });

    $('#globalsearchbtn').button({
        icons : {
            primary : "ui-icon-search"
        },
        text: false
        }).click(function(e) {
            globalsearch();
            e.preventDefault();
        });

    $('#sb_input').enterKey(function(){
        globalsearch();
    });
}

var globalSearchSuccessFunction = function(data, textStatus, jqXHR) {
    var gsObject = new Object();
    gsObject.crudRows = data;
    var tableHtml = $("#globalSearchListTemplate").render(gsObject);
    $("#content").html(tableHtml);
    var gsTable=displayListTable("globalSearchtable");
    $('input:checkbox[name=gsresource]:checked').removeAttr('checked');
}

function globalsearch(){
    //Get search query string

    var query = $('#sb_input').val();
    var resources = $('input:checkbox[name=gsresource]:checked').map(function () {
                      return this.value;
                    }).get().join(",");
    if(query.length > 0){
        var getUrl = "search?query=" + encodeURIComponent(query);
        if(resources.length > 0) getUrl = getUrl + "&resource=" + encodeURIComponent(resources);                    

        executeAjaxRequest(getUrl, 'GET', "", globalSearchSuccessFunction, formErrorFunction);
    }
}

function showLogon(logonDivName) {
	var htmlVar = '<div id=theLogonForm><img style="float:left; border: 0;" alt="" src="resources/mifos.jpg"/><div id=appTitle>' + doI18N("app.name") + '<br>' + doI18N("label.tenant.name") + ': ' + tenantIdentifier + '</div>';
	htmlVar += '<form name = "logonform"><table id=logonTable><tr><td></td><td>' + doI18N("label.username") + '</td><td><input type="text" name="username" value="billing"></td></tr>';
	htmlVar += '<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td><td>' + doI18N("label.password") + '</td><td><input type="password" name="pwd" value="password" onKeyPress="return checkSubmit(event, ' + "'" + logonDivName + "'" + ', document.logonform.username.value, document.logonform.pwd.value )"></td></tr>';
	htmlVar += '<tr><td></td><td><input type="button" value="Logon" name="Submit" ';
	htmlVar += 'onclick= "setBasicAuthKey(' + "'" + logonDivName + "'" + ', document.logonform.username.value, document.logonform.pwd.value )"></td><td></td></tr></table></form>';
	htmlVar += '<div id=formerrors></div></div>';

	$("#" + logonDivName).html(htmlVar);
}

function setClientListingContent(divName) {
	var htmlVar = "";
	
	if (jQuery.MifosXUI.showTask("ADDCLIENT") == true) 
		htmlVar = '<button id="addclient" style="clear: both;">' + doI18N("link.add.new.client") + '</button>';
	
	htmlVar += '<div id="tabs"><ul><li><a href="#searchtab" title="searchtab">' + doI18N("tab.search") + '</a></li></ul><div id="searchtab"></div></div>';
	

	$("#" + divName).html(htmlVar);
}

function setCenterListingContent(divName) {
	var htmlVar = '<div id="tabs"><ul><li><a href="#searchtab" title="searchtab">' + doI18N("tab.center.manage") + '</a></li></ul><div id="searchtab"></div></div>';

	$("#" + divName).html(htmlVar);
}

function setNewCenterListingContent(divName) {
	var htmlVar = "";
	
	if (jQuery.MifosXUI.showTask("ADDCLIENT")) {
		htmlVar = '<button id="addCenter" style="clear: both;">' + doI18N("link.add.new.center") + '</button>';
	}
		
	htmlVar += '<div id="tabs"><ul><li><a href="#searchtab" title="searchtab">' + doI18N("tab.center.manage") + '</a></li></ul><div id="searchtab"></div></div>';

	$("#" + divName).html(htmlVar);
}

function setGroupListingContent(divName) {
	var htmlVar = "";
	
	if (jQuery.MifosXUI.showTask("ADDCLIENT")) {
		htmlVar = '<button id="addstandardgroup" style="clear: both;">' + doI18N("link.add.new.group") + '</button>';
	}
		
	htmlVar += '<div id="tabs"><ul><li><a href="#searchtab" title="searchtab">' + doI18N("tab.group.manage") + '</a></li></ul><div id="searchtab"></div></div>';

	$("#" + divName).html(htmlVar);
}

function setCommunalBankListingContent(divName){
	var htmlVar = '<div id="tabs"><ul><li><a href="#searchtab" title="searchtab">' + doI18N("tab.communalbank.manage") + '</a></li></ul><div id="searchtab"></div></div>';

	$("#" + divName).html(htmlVar);
}

function setClientContent(divName) {
	var htmlVar = '<div  id="clienttoolbar"></div>'
	htmlVar += '<div id="clientdatatabs">	<ul><li><a href="#clienttab"'; 
	htmlVar += ' title="clienttab" class="topleveltab"><span id="clienttabname">' + doI18N("client.general.tab.name") + '</span></a></li>';
	htmlVar += '<li><a href="#clientidentifiertab" title="clientidentifiertab" class="topleveltab"><span id="clientidentifiertabname">' + doI18N("client.identifier.tab.name")  + '</span></a></li>';
	htmlVar += '<li><a href="#clientdocumenttab" title="clientdocumenttab" class="topleveltab"><span id="clientdocumenttabname">' + doI18N("client.document.tab.name")  + '</span></a></li>';
	htmlVar += '<li><a href="#ownedhardwaretab" title="ownedhardwaretab" class="topleveltab"><span id="clientdocumenttabname">' + doI18N("ownedhardware.tab.name")  + '</span></a></li>';
	htmlVar += '<li><a href="#clientorderstab" title="clientorderstab" class="topleveltab"><span id="clientdocumenttabname">' + doI18N("client.order.tab.name")  + '</span></a></li>';
	htmlVar += '<li><a href="#clientsaletab" title="clientsaletab" class="topleveltab"><span id="clientdocumenttabname">' + doI18N("client.onetime.tab.name")  + '</span></a></li>';
	htmlVar += '<li><a href="#clienttransactiontab" title="clienttransactiontab" class="topleveltab"><span id="clientdocumenttabname">' + doI18N("client.transaction.tab.name")  + '</span></a></li>';
	htmlVar += '<li><a href="#clientbillstatementtab" title="clientbillstatementtab" class="topleveltab"><span id="clientdocumenttabname">' + doI18N("client.statment.tab.name")  + '</span></a></li>';	
	htmlVar += '<li><a href="#clienttickettab" title="clienttickettab" class="topleveltab"><span id="clientdocumenttabname">' + doI18N("client.ticKet.tab.name")  + '</span></a></li>';
	htmlVar += '<li><a href="#clienttransactionhistorytab" title="clienttransactionhistorytab" class="topleveltab"><span id="clientdocumenttabname">' + doI18N("client.transactionhistory.tab.name")  + '</span></a></li>';
	htmlVar += '</ul><div id="clienttab"></div><div id="clientidentifiertab"></div><div id="clientdocumenttab"></div><div id="ownedhardwaretab"></div><div id="clientorderstab"></div>';
	htmlVar +='<div id="clientsaletab"></div><div id="clienttransactiontab"></div><div id="clientbillstatementtab"></div><div id="clienttickettab"></div>';
	htmlVar +='<div id="clienttransactionhistorytab"></div></div></div>';
	$("#" + divName).html(htmlVar);
}

function setGroupContent(divName) {
	var htmlVar = '<div id="groupdetails"></div><div id="groupdatatabs">	<ul><li><a href="unknown.html"'; 
	htmlVar += 	' title="grouptab" class="topleveltab"><span id="grouptabname">' + doI18N("app.loading") + '</span></a></li>'
	htmlVar += 	' <li><a href="unknown.html"'; 
	htmlVar += 	' title="groupclientstab" class="topleveltab"><span id="groupclientstabname">' + doI18N("app.loading") + '</span></a></li>'
	htmlVar += 	' <li><a href="unknown.html"'; 
	htmlVar += 	' title="groupsummarytab" class="topleveltab"><span id="groupsummarytabname">' + doI18N("app.loading") + '</span></a></li>'
	htmlVar += 	' </ul><div id="grouptab"></div></div>';
	
	$("#" + divName).html(htmlVar);
}

function setCenterContent(divName) {
	var htmlVar = '<div id="centerDetails"></div><div id="centerdatatabs">	<ul><li><a href="unknown.html"'; 
	htmlVar += 	' title="centertab" class="topleveltab"><span id="centertabname">' + doI18N("app.loading") + '</span></a></li>'
	htmlVar +=	' <li><a href="unknown.html"'; 
	htmlVar += 	' title="centertabgroups" class="topleveltab"><span id="centertabgroupsname">' + doI18N("app.loading") + '</span></a></li>';
	htmlVar +=	' <li><a href="unknown.html"'; 
	htmlVar += 	' title="centertabsummary" class="topleveltab"><span id="centertabsummaryname">' + doI18N("app.loading") + '</span></a></li>';
	htmlVar += 	'</ul><div id="centertab"></div></div>';
	$("#" + divName).html(htmlVar);
}


function setAddLoanContent(divName) {

	var htmlVar = '<div id="inputarea"></div><div id="schedulearea"></div>'
	$("#" + divName).html(htmlVar);
}

function setAddBulkLoanContent(divName) {
	var htmlVar = '<div id="jlgloans" style="padding: 50px;"></div>';
	$("#" + divName).html(htmlVar);
}

function setAddDepositContent(divName) {

	var htmlVar = '<div id="inputarea"></div><div id="schedulearea"></div>'
	$("#" + divName).html(htmlVar);
	}

function setAddSavingContent(divName) {

	var htmlVar = '<div id="inputarea"></div><div id="schedulearea"></div>'
	$("#" + divName).html(htmlVar);
}


function setOrgAdminContent(divName) {

//	var addSavingProductUrl="maintainTable('savingproduct', 'savingproducts', 'POST');return false;";
//	var addDepositProductUrl="maintainTable('depositproduct', 'depositproducts', 'POST');return false;";
	var addOfficeUrl = "maintainTable('office', 'offices', 'POST');return false;";
	var addEmployeeUrl = "maintainTable('employee', 'staff', 'POST');return false;";
	var orgCurrencyUrl = "maintainTable('orgCurrency', 'currencies', 'PUT');return false;";
	var officeMoneyTransfer = "maintainTable('officetransaction', 'officetransactions', 'POST');return false;";
	var addrandomGeneratorUrl = "maintainTable('randomGenerator', 'randomgenerators', 'POST');return false;";
	var batchJobUrl = "showBatchJobDetails();return false;"

	var htmlOptions = "";
	/*if (jQuery.MifosXUI.showTask("ViewLoanProducts"))
		htmlOptions += ' | <a href="unknown.html" onclick="listLoanProducts();return false;" id="viewloanproducts">' + doI18N("administration.link.view.loan.products") + '</a>';

	if (jQuery.MifosXUI.showTask("AddLoanProduct")) {
		htmlOptions += ' | <a href="#" id="addloanproduct">' + doI18N("administration.link.add.loan.product") + '</a>';
	}

	if (jQuery.MifosXUI.showTask("ViewSavingProducts")) {
		htmlOptions += ' | <a href="#" onclick="listSavingsProducts();return false;" id="viewsavingproducts">' + doI18N("administration.link.view.saving.products") + '</a>';
//		htmlOptions += ' | <a href="unknown.html" onclick="refreshTableView(' + "'savingsproduct'" + ');return false;" id="viewsavingproducts">' + doI18N("administration.link.view.saving.products") + '</a>';
	}
		
	if (jQuery.MifosXUI.showTask("AddSavingProduct")) {
		htmlOptions += ' | <a href="#" id="addsavingsproduct">' + doI18N("administration.link.add.saving.product") + '</a>';
//		htmlOptions += ' | <a href="unknown.html" onclick="' + addSavingProductUrl + '" id="addsavingproduct">' + doI18N("administration.link.add.saving.product") + '</a>';
	}
		
	if (jQuery.MifosXUI.showTask("ViewDepositProducts")) {
//		htmlOptions += ' | <a href="unknown.html" onclick="refreshTableView(' + "'depositproduct'" + ');return false;" id="viewdepositproducts">' + doI18N("administration.link.view.deposit.products") + '</a>';
	}
		
	if (jQuery.MifosXUI.showTask("AddDepositProduct")) {
//		htmlOptions += ' | <a href="unknown.html" onclick="' + addDepositProductUrl + '" id="adddepositproduct">' + doI18N("administration.link.add.deposit.product") + '</a>';		
	}

	if (jQuery.MifosXUI.showTask("ViewFunds") == true)
		htmlOptions += ' | <a href="unknown.html" onclick="refreshTableView(' + "'fund'" + ');return false;" id="viewfunds">' + doI18N("administration.link.view.funds") + '</a>';

	if (jQuery.MifosXUI.showTask("AddFund") == true)
		htmlOptions += ' | <a href="unknown.html" onclick="' + addFundUrl + '" id="addfund">' + doI18N("administration.link.add.fund") + '</a>';
*/
	var htmlOptions2 = "";
	if (jQuery.MifosXUI.showTask("ViewEmployees") == true)
		htmlOptions2 += '  <a href="unknown.html" onclick="refreshTableView(' + "'employee'" + ');return false;" id="viewemployees">' + doI18N("administration.link.view.employees") + '</a>';

	if (jQuery.MifosXUI.showTask("AddEmployee") == true)
		htmlOptions2 += ' | <a href="unknown.html" onclick="' + addEmployeeUrl + '" id="addemployee">' + doI18N("administration.link.add.employee") + '</a> | ';

	/*if (jQuery.MifosXUI.showTask("ViewCharges") == true)
		htmlOptions += ' | <a href="unknown.html" onclick="refreshTableView(' + "'charge'" + ');return false;" id="viewcharges">' + doI18N("administration.link.view.charges") + '</a>';

	if (jQuery.MifosXUI.showTask("AddCharge") == true)
		htmlOptions += ' | <a href="unknown.html" onclick="' + addChargeUrl + '" id="addcharge">' + doI18N("administration.link.add.charge") + '</a>';*/
	
/*
	if (htmlOptions > "")
	{
		htmlOptions += '<br><br>';
		htmlOptions = htmlOptions.substring(3)
	}*/

//	var htmlOptions2 = "";
	if (jQuery.MifosXUI.showTask("CurrencyConfiguration") == true)
		htmlOptions2 += '  <a href="unknown.html" onclick="' + orgCurrencyUrl + '" id="editconfiguration">' + doI18N("administration.link.currency.configuration") + '</a>';

	if (jQuery.MifosXUI.showTask("ViewOffices") == true)
		htmlOptions2 += ' | <a href="unknown.html" onclick="refreshTableView(' + "'office'" + ');return false;" id="viewoffices">' + doI18N("administration.link.view.offices") + '</a>';

	if (jQuery.MifosXUI.showTask("AddOffice") == true)
		htmlOptions2 += ' | <a href="unknown.html" onclick="' + addOfficeUrl + '" id="addoffice">' + doI18N("administration.link.add.office") + '</a>';

	if (jQuery.MifosXUI.showTask("ViewOfficeMoneyTxns") == true)
		htmlOptions2 += ' | <a href="unknown.html" onclick="refreshTableView(' + "'officetransaction'" + ');return false;" id="viewofficetransactions">' + doI18N("administration.link.view.office.money.transfers") + '</a>';

	if (jQuery.MifosXUI.showTask("AddOfficeMoneyTxn") == true)
		htmlOptions2 += ' | <a href="unknown.html" onclick="' + officeMoneyTransfer + '" id="internalTransfer">' + doI18N("administration.link.office.money.transfer") + '</a>';

	/*if (jQuery.MifosXUI.showTask("BulkLoanReassignment") == true)
		htmlOptions2 += ' | <a href="unknown.html" onclick="' + bulkLoanReassignmentUrl + '" id="bulkLoanReassignment">' + doI18N("administration.link.bulk.loan.reassignment") + '</a>';	
*/
	if (htmlOptions2 > "")
	{
		htmlOptions2 += '<br><br>';
	
	}

	if (jQuery.MifosXUI.showTask("VIEWCONTRACT") == true)
		htmlOptions2 += '  <a href="unknown.html" onclick="refreshTableView(' + "'subscription'" + ');return false;" id="viewcontract">' + doI18N("administration.link.contract.details") + '</a>';
	
	if (jQuery.MifosXUI.showTask("SERVICE") == true)
  	     htmlOptions2 += '| <a href="unknown.html" onclick="refreshTableView(' + "'servicemaster'" + ');return false;"" id="service" >' + doI18N("administration.link.service.details") + '</a>';

	if (jQuery.MifosXUI.showTask("PLAN") == true)
 	     htmlOptions2 += '| <a href="unknown.html" onclick="refreshTableView(' + "'plan'" + ');return false;"" id="service" >' + doI18N("administration.link.plan.details") + '</a>';
	if (jQuery.MifosXUI.showTask("EVENT") == true)
	     htmlOptions2 += '| <a href="unknown.html" onclick="refreshTableView(' + "'eventmaster'" + ');return false;"" id="service" >' + doI18N("administration.link.event.details") + '</a>';

	/*if (jQuery.MifosXUI.showTask("ITEM") == true)
 	     htmlOptions2 += '| <a href="unknown.html" onclick="refreshTableView(' + "'item'" + ');return false;"" id="service" >' + doI18N("administration.link.item.details") + '</a>';
*/
	if (jQuery.MifosXUI.showTask("MEDIA") == true)
		   htmlOptions2 += '| <a href="unknown.html"  onclick="addMedias();return false;">' + doI18N("administration.link.media.details") + '</a>';
	
	if (jQuery.MifosXUI.showTask("CHARGECODE") == true)
		 	htmlOptions2 += '| <a href="unknown.html" onclick="refreshTableView(' + "'chargecode'" + ');return false;"" id="service" >' + doI18N("administration.link.chargecode.details") + '</a>';
	
	if (jQuery.MifosXUI.showTask("DISCOUNT") == true)
		htmlOptions2 += '| <a href="unknown.html" onclick="refreshTableView(' + "'discount'" + ');return false;"" id="service" >' + doI18N("administration.link.discount.details") + '</a>';

	if (jQuery.MifosXUI.showTask("MESSAGE") == true)
		   htmlOptions2 += '| <a href="unknown.html"  onclick="addMessages();return false;">' + doI18N("administration.link.message.details") + '</a>';
	
	if (jQuery.MifosXUI.showTask("BATCH") == true)
		htmlOptions2 += '| <a href="unknown.html" onclick="refreshTableView(' + "'batch'" + ');return false;"" id="service" >' + doI18N("administration.link.batch.details") + '</a>';
	if (jQuery.MifosXUI.showTask("COUNTRYCURRENCY") == true)
		htmlOptions2 += '| <a href="unknown.html" onclick="refreshTableView(' + "'countrycurrency'" + ');return false;"" id="service" >' + doI18N("administration.link.countrycurrency.details") + '</a>';
	
	if (jQuery.MifosXUI.showTask("REGION") == true)
		  htmlOptions2 += '| <a href="unknown.html" onclick="refreshTableView(' + "'region'" + ');return false;"" id="region" >' + doI18N("administration.link.region.details") + '</a>';
	if (jQuery.MifosXUI.showTask("PinGenerate") == true)
		   htmlOptions2 += '| <a href="unknown.html" onclick="refreshTableView(' + "'randomgenerator'" + ');return false;"" id="service" >' + doI18N("administration.link.voucher.details") + '</a>';
	
	
    
	
	/*if (htmlOptions2 > "")
	{
		htmlOptions2 += '<br><br>';
		htmlOptions2 = htmlOptions2.substring(3);
	}
	htmlOptions2 += '<br><br>';
	$("#" + divName).html(simpleOptionsHtml(htmlOptions + htmlOptions2)+'<br><br>');
	
	$('#addloanproduct').click(function(e) {
		launchLoanProductDialog(null);
    	e.preventDefault();*/
	//});
	htmlOptions2 += '</span>';
	htmlOptions2 += '</div>';
	htmlOptions2 += '<br><br>';
	htmlOptions2 += '<div id="listplaceholder" ></div>';
	$("#" + divName).html(htmlOptions2);
	
	$('#addsavingsproduct').click(function(e) {
		launchSavingsProductDialog(null);
    	e.preventDefault();
	});
}


function setUserAdminContent(divName) {

	var addUserUrl = "maintainTable('user', 'users', 'POST');return false;";
	var addRoleUrl = "maintainTable('role', 'roles', 'POST');return false;";

	var htmlOptions = "";
	if (jQuery.MifosXUI.showTask("ViewUsers") == true)
		htmlOptions += ' | <a href="unknown.html" onclick="refreshTableView(' + "'user'" + ');return false;" id="listusers">' + doI18N("administration.link.view.users") + '</a>';

	if (jQuery.MifosXUI.showTask("AddUser") == true)
		htmlOptions += ' | <a href="unknown.html" onclick="' + addUserUrl + '" id="adduser">' + doI18N("administration.link.add.user") + '</a>';

	if (jQuery.MifosXUI.showTask("ViewRoles") == true)
		htmlOptions += ' | <a href="unknown.html" onclick="refreshTableView(' + "'role'" + ');return false;" id="listroles">' + doI18N("administration.link.view.roles") + '</a>';

	if (jQuery.MifosXUI.showTask("AddRole") == true)
		htmlOptions += ' | <a href="unknown.html" onclick="' + addRoleUrl + '" id="addrole">' + doI18N("administration.link.add.role") + '</a>';
	
	if (htmlOptions > "") htmlOptions = htmlOptions.substring(3);

	$("#" + divName).html(simpleOptionsHtml(htmlOptions));
}

function setSysAdminContent(divName) {

	var addCodeUrl = "maintainTable('code', 'codes', 'POST');return false;";
	var maintainMakerCheckerUrl = "maintainTable('permission', 'permissions?makerCheckerable=true', 'PUT');return false;";
	var registerDatatableUrl = "maintainTable('datatable', 'datatables', 'POST');return false;";
	var addReportUrl = "launchReportDialog(null);return false;";
	var addUserUrl = "maintainTable('user', 'users', 'POST');return false;";
	var addRoleUrl = "maintainTable('role', 'roles', 'POST');return false;";

	var htmlOptions = "";
	if (jQuery.MifosXUI.showTask("VIEWDATATABLES") == true)
		htmlOptions += ' | <a href="unknown.html" onclick="refreshTableView(' + "'datatable'" + ');return false;" id="listdatatables">' + doI18N("administration.link.view.datatables") + '</a>';

	if (jQuery.MifosXUI.showTask("REGISTERDATATABLE") == true)
		htmlOptions += ' | <a href="unknown.html" onclick="' + registerDatatableUrl + '" id="registerdatatable">' + doI18N("administration.link.register.datatable") + '</a>';

	if (jQuery.MifosXUI.showTask("ViewCodes") == true)
		htmlOptions += ' | <a href="unknown.html" onclick="refreshTableView(' + "'code'" + ');return false;" id="viewcodes">' + doI18N("administration.link.view.code") + '</a>';

	if (jQuery.MifosXUI.showTask("AddCode") == true)
		htmlOptions += ' | <a href="unknown.html" onclick="' + addCodeUrl + '" id="addcode">' + doI18N("administration.link.add.code") + '</a>';

	if (jQuery.MifosXUI.showTask("ViewPermissions") == true)
		htmlOptions += ' | <a href="unknown.html" onclick="refreshTableView(' + "'permission'" + ');return false;" id="listpermissions">' + doI18N("administration.link.view.permissions") + '</a>';

	if (jQuery.MifosXUI.showTask("ManagePermissions") == true)
		htmlOptions += ' | <a href="unknown.html" onclick="' + maintainMakerCheckerUrl + '" id="maintainMC">' + doI18N("administration.link.maintain.makerCheckerable") + '</a>';
	
	if (jQuery.MifosXUI.showTask("ViewConfiguration") == true)
		htmlOptions += ' | <a href="unknown.html" onclick="refreshTableView(' + "'configuration'" + ');return false;" id="viewconfiguration">' + doI18N("administration.link.view.configuration") + '</a>';

	if (jQuery.MifosXUI.showTask("ViewAudits") == true)
		htmlOptions += ' | <a href="unknown.html" onclick="auditSearch(' + "'audit'" + ');return false;" id="viewaudits">' + doI18N("administration.link.view.audits") + '</a>';

	if (jQuery.MifosXUI.showTask("ViewReports") == true)
		htmlOptions += ' | <a href="unknown.html" onclick="refreshTableView(' + "'report'" + ');return false;" id="viewreports">' + doI18N("administration.link.view.reports") + '</a>';

	if (jQuery.MifosXUI.showTask("AddReport") == true)
		htmlOptions += ' | <a href="unknown.html" onclick="' + addReportUrl + '" id="addreport">' + doI18N("administration.link.add.report") + '</a><br/><br/>';
	if (jQuery.MifosXUI.showTask("ViewUsers") == true)
		htmlOptions += ' <a href="unknown.html" onclick="refreshTableView(' + "'user'" + ');return false;" id="listusers">' + doI18N("administration.link.view.users") + '</a>';

	if (jQuery.MifosXUI.showTask("AddUser") == true)
		htmlOptions += ' | <a href="unknown.html" onclick="' + addUserUrl + '" id="adduser">' + doI18N("administration.link.add.user") + '</a>';

	if (jQuery.MifosXUI.showTask("ViewRoles") == true)
		htmlOptions += ' | <a href="unknown.html" onclick="refreshTableView(' + "'role'" + ');return false;" id="listroles">' + doI18N("administration.link.view.roles") + '</a>';

	if (jQuery.MifosXUI.showTask("AddRole") == true)
		htmlOptions += ' | <a href="unknown.html" onclick="' + addRoleUrl + '" id="addrole">' + doI18N("administration.link.add.role") + '</a><br/>';
	
	if (htmlOptions > "") htmlOptions = htmlOptions.substring(3);
	htmlOptions += '<br><br>';
	$("#" + divName).html(simpleOptionsHtml(htmlOptions));
}

function setAccountingContent(divName) {
	//get a list of all offices (as this is required by most accounting subtabs)
	var officesObject;
	var getOfficesSuccessFunction = function(data, textStatus, jqXHR) {
		officesObject = data;
		$("#" + divName).html($("#accountingHomeTemplate").render());
		$("#accountingtabs").tabs({
			select : function(event, tab) {
				fetchAccountingTabContent(tab.index);
			}
		});
		var fetchAccountingTabContent = function(index) {
			//journal entries tab selected
			if (index == 0) {
				handleJournalEntriesTabSelection(officesObject);
			}//accounting closures tab selecetd
			else if (index == 1) {
				handleGLClosuresTabSelection(officesObject);
			}
			//coa tab selected
			else if (index == 2) {
				handleCOATabSelection();
			}
		}
		//determine which tab is initially selected and load data for the same
		var selected = $("#accountingtabs").tabs('option', 'selected');
		fetchAccountingTabContent(selected);
	}
	executeAjaxRequest('offices', 'GET', "", getOfficesSuccessFunction, formErrorFunction);
}

function reverseJournalEntrySuccessFunction(data, textStatus, jqXHR) {
	$("#dialog-form").dialog("close");
	$("#searchjournalentries").click();
}

function handleJournalEntriesTabSelection(officesObject) {
	// get list of all offices and accounts and initialize the screen
	var getAccountsSuccessFunction = function(data, textStatus, jqXHR) {
		var baseObject = new Object();
		baseObject.offices = officesObject;
		baseObject.accounts = data;
		journalEntriesTabHtml = $("#journalEntriesTemplate").render(baseObject);
		$("#journalentry-tab").html(journalEntriesTabHtml);

		/** Account Id drop into a combo-box*/
		$("#accountId").combobox();

		/***yyyy-mm-dd format for date picker feilds***/
		$('.datepickerfieldforaccounting').datepicker({constrainInput: true, maxDate: 0, dateFormat: 'yy-mm-dd'});

		/** Onclick function for adding a new Journal Entry */
		$("#addjournalentry").button({
			icons : {
				primary : "ui-icon-circle-plus"
			}
		}).click(function(e) {
			var getUrl = "";
			var putUrl = "journalentries";
			var templateSelector = "#journalEntryFormTemplate";
			var width = 600;
			var height = 500;

			var saveSuccessFunction = function(data, textStatus, jqXHR) {
				$("#dialog-form").dialog("close");
				searchForJournalEntries();
			}
			popupDialogWithFormViewData(baseObject, putUrl, 'POST', "dialog.title.journalEntry.add", templateSelector, width, height, saveSuccessFunction);
			//initialize default comboboxes in popup
			$("#debitAccountId1").combobox();
			$("#creditAccountId1").combobox();

			//init button for adding new debits
			var debitSize = $('#debits p').size() + 1;
			$("#addDebit").button({
			icons : {
				primary : "ui-icon-plusthick"
			},
			text: false
			}).click(function(e) {
				debitSize = debitSize + 1;
				baseObject.accountId = "debitAccountId" + debitSize;
				baseObject.amountId = "debitAmount" + debitSize;
				baseObject.deleteButtonId = "removeDebitButton" + debitSize;
				baseObject.activity = "Remove this Debit Entry";
				var debitTemplateHtml = $("#singleDebitOrCreditEntryTemplate").render(baseObject);
				$("#debits").append(debitTemplateHtml);
				//onclick funtion for newly added delete button
				$("#" + baseObject.deleteButtonId).button({
				icons : {
					primary : "ui-icon-cancel"
				},
				text:false
				}).click(function(e) {
					if( debitSize > 1 ) {
                        $(this).parents('p').remove();
                        debitSize --;
               		}
                	e.preventDefault();
				});
				//make newly added select a combobox
				$("#" + baseObject.accountId).combobox();
				e.preventDefault();
			});

			//init button for adding new credits
			var creditSize = $('#credits p').size() + 1;
			$("#addCredit").button({
			icons : {
				primary : "ui-icon-plusthick"
			},
			text: false
			}).click(function(e) {
				creditSize = creditSize + 1;
				baseObject.accountId = "creditAccountId" + creditSize;
				baseObject.amountId = "creditAmount" + creditSize;
				baseObject.deleteButtonId = "removeCreditButton" + creditSize;
				baseObject.activity = "Remove this credit Entry";
				var creditTemplateHtml = $("#singleDebitOrCreditEntryTemplate").render(baseObject);
				$("#credits").append(creditTemplateHtml);
				//onclick funtion for newly added delete button
				$("#" + baseObject.deleteButtonId).button({
				icons : {
					primary : "ui-icon-cancel"
				}, 
				text:false
				}).click(function(e) {
					if( creditSize > 1 ) {
                        $(this).parents('p').remove();
                        creditSize --;
               		}
                	e.preventDefault();
				});
				//make newly added select a combobox
				$("#" + baseObject.accountId).combobox();
				e.preventDefault();
			});
			e.preventDefault();
		});

		/** On-click function for searching for Journal Entries*/
		$("#searchjournalentries").button({
			icons : {
				primary : "ui-icon-search"
			}
		}).click(function(e) {
			searchForJournalEntries();
			e.preventDefault();
		});
	}
	executeAjaxRequest('glaccounts?manualEntriesAllowed=true&usage=1&disabled=false', 'GET', "", getAccountsSuccessFunction, formErrorFunction);

	var searchForJournalEntries = function() {
		var fromdate = $("#fromDate").val();
		var todate = $("#toDate").val();
		var onlyManualEntries = $('#onlyManualEntries').is(':checked');

		var data = {}
			if ($("#journalEntryOfficeId").val() != "") {
				data.officeId = $("#journalEntryOfficeId").val();
			}
			if ($("#accountId").val() != "") {
				data.accountId = $("#accountId").val();
			}
			if (onlyManualEntries) {
				data.manualEntriesOnly = true;
			}
			if (fromdate != undefined && fromdate != "") {
				data.fromDate = fromdate;
			}
			if (todate != undefined && todate != "") {
				data.toDate = todate;
			}		
			
			
			data.dateFormat= 'yyyy MMMM dd ';//custom.helperFunctions.currentDateFormat();
            data.locale= custom.helperFunctions.currentLocale();
			
		//	alert(data);
		
		var journalEntriesTablesHtml = $("#journalEntriesTableTemplate").render();
		$("#journalentriessearchresults").html(journalEntriesTablesHtml);
		var oTable = $("#journalentriestable").dataTable(custom.jqueryDataTableServerSide.paginated("journalentriestable",data));
		initTableConf("journalentriestable",oTable);
	}
}

function handleGLClosuresTabSelection(officesObject) {
	var baseObject = new Object();
	baseObject.crudRows = officesObject;
	var accountingClosuresTabHtml = $("#glAccountClosuresTemplate").render(baseObject);
	$("#accountingclosure-tab").html(accountingClosuresTabHtml);

	/** Onclick function for adding a new Account Closure*/
	$("#addglclosure").button({
		icons : {
			primary : "ui-icon-circle-plus"
		}
	}).click(function(e) {
		var getUrl = "";
		var putUrl = "glclosures";
		var templateSelector = "#glAccountClosuresFormTemplate";
		var width = 600;
		var height = 400;

		// update currently selected div if onclick function succeeds
		var saveSuccessFunction = function(data, textStatus, jqXHR) {
			$("#dialog-form").dialog("close");
		}
		popupDialogWithFormViewData(baseObject, putUrl, 'POST', "dialog.title.glAccountClosure.add.account", templateSelector, width, height, saveSuccessFunction);
		e.preventDefault();
	});

	/** Onclick function for searching for GL Accounts */
	$("#searchglclosure").button({
		icons : {
			primary : "ui-icon-search"
		}
	}).click(function(e) {
		searchForClosures();
		e.preventDefault();
	});

	/** *function called on successfully fetching GL Closure details** */
	var glClosuresFetchSuccessFunction = function(data) {
		var glClosuresObject = new Object();
		glClosuresObject.crudRows = data;
		var accountingClosuresTablesHtml = $("#glAccountClosuresTableTemplate").render(glClosuresObject);
		$("#glaccountclosuressearchresults").html(accountingClosuresTablesHtml);
		oTable = displayListTable("closurestable");

		var editGLClosureSuccessFunction = function(data, textStatus, jqXHR) {
			$("#dialog-form").dialog("close");
			searchForClosures();
		}
		// initialize info/edit and delete buttons
		$.each(glClosuresObject.crudRows, function(i, val) {
			$("#glclosureinfo" + val.id).button({
				icons : {
					primary : "ui-icon-info"
				},
				text: false
			}).click(function(e) { {
					var width = 550;
					var height = 350;
					var templateSelector = "#glAccountClosuresInfoTemplate";
					popupDialogWithReadOnlyFormViewData(val,"dialog.title.glAccountClosure.view", templateSelector, width, height);
				}
				e.preventDefault();
			});
			$("#glclosureedit" + val.id).button({
				icons : {
					primary : "ui-icon-pencil"
				},
				text: false
			}).click(function(e) {
				var getUrl = 'glclosures/' + val.id;
				var putUrl = 'glclosures/' + val.id;
				var templateSelector = "#glAccountClosuresEditFormTemplate";
				var width = 600;
				var height = 450;

				popupDialogWithFormView(getUrl, putUrl, 'PUT', "dialog.title.glAccountClosure.edit", templateSelector, width, height, editGLClosureSuccessFunction);
				e.preventDefault();
			});
			// button for delete
			$("#glclosuredelete" + val.id).button({
				icons : {
					primary : "ui-icon-trash"
				},
				text: false
			}).click(function(e) {
				var url = "glclosures/" + val.id;
				var width = 400;
				var height = 225;

				popupConfirmationDialogAndPost(url, 'DELETE', 'dialog.title.confirmation.required', width, height, 0, editGLClosureSuccessFunction);
				e.preventDefault();
			});
		});

	};

	var searchForClosures = function() {
		var officeId = $("#accountClosuresOfficeId").val();
		if (officeId != "") {
			executeAjaxRequest('glclosures?officeId=' + officeId, 'GET', "", glClosuresFetchSuccessFunction, formErrorFunction);
		} else {
			executeAjaxRequest('glclosures', 'GET', "", glClosuresFetchSuccessFunction, formErrorFunction);
		}
	}
}


function handleCOATabSelection(){
	//render coa tab
	var coaTabHtml = $("#chartOfAccountsTemplate").render();
	$("#coa-tab").html(coaTabHtml);

	var divToUpdate;
	var oTable;

	/** *function called on successfully fetching GL Account details** */
	var glAccountsFetchSuccessFunction =  function(data) {
		var glAccountsObject = new Object();
	    glAccountsObject.crudRows = data;
	    //function called on successfully updating a GL Account
	    var editGLAccountSuccessFunction = function(data, textStatus, jqXHR) {
		  	$("#dialog-form").dialog("close");
		  	handleCOATabSelection();
		}

	    // render the data in appropriate div
		var tableHtml = $("#accountsTableTemplate").render(glAccountsObject);
		$(divToUpdate).html(tableHtml);
		oTable=displayListTable("accountstable");

	    // initialize info/edit and delete buttons
	    $.each(glAccountsObject.crudRows, function(i, val) {
			      $("#glaccountinfo" + val.id).button({icons: {
	                primary: "ui-icon-info"},
					text: false
	                }).click(function(e){
                    {
                    var width = 600;
					var height = 350;
					var templateSelector = "#glAccountsInfoFormTemplate";
					popupDialogWithReadOnlyFormViewData(val,"dialog.title.glAccount.view", templateSelector, width, height);
                    }
				    e.preventDefault();
			      });
				  $("#glaccountedit" + val.id).button({icons: {
		            primary: "ui-icon-pencil"},
					text: false
		            }).click(function(e) {
					var getUrl = 'glaccounts/'+val.id+ '?template=true';
					var putUrl = 'glaccounts/'+val.id;
					var templateSelector = "#glAccountsFormTemplate";
					var width = 600; 
					var height = 450;

					popupDialogWithFormView(getUrl, putUrl, 'PUT', "dialog.title.glAccount.edit", templateSelector, width, height,  editGLAccountSuccessFunction);
					e.preventDefault();
				  });
				  // button for delete
				  $("#glaccountdelete" + val.id).button({icons: {
		            primary: "ui-icon-trash"},
					text: false
		            }).click(function(e){
					var url = "glaccounts/"+ val.id;
					var width = 400; 
					var height = 225;

					popupConfirmationDialogAndPost(url, 'DELETE', 'dialog.title.confirmation.required', width, height, 0, editGLAccountSuccessFunction);
					e.preventDefault();
			      });
			      if($("#glaccountenable" + val.id).length){
				      $("#glaccountenable" + val.id).button({icons: {
			          primary: "ui-icon-unlocked"},
					  text: false
			          }).click(function(e){
					  var url = "glaccounts/"+ val.id;
					  var width = 400; 
					  var height = 225;
					  
					  var searializedArray= {};
					  searializedArray["disabled"]= false;
					  var jsonString =JSON.stringify(searializedArray);
					  
		
					  popupConfirmationDialogAndPost(url, 'PUT', 'dialog.title.confirmation.required', width, height, 0, editGLAccountSuccessFunction,jsonString);
					  e.preventDefault();
				      });
			      }
			      if($("#glaccountdisable" + val.id).length){
				      $("#glaccountdisable" + val.id).button({icons: {
			          primary: "ui-icon-locked"},
					  text: false
			          }).click(function(e){
					  var url = "glaccounts/"+ val.id;
					  var width = 400; 
					  var height = 225;
					  
					  var searializedArray= {};
					  searializedArray["disabled"]= true;
					  var jsonString =JSON.stringify(searializedArray);
		
					  popupConfirmationDialogAndPost(url, 'PUT', 'dialog.title.confirmation.required', width, height, 0, editGLAccountSuccessFunction,jsonString);
					  e.preventDefault();
				      });
			      }
			      
	    });

	};


	/** Onclick function for adding a new GL Account */
	$("#addglaccount").button({icons: {
	    primary: "ui-icon-circle-plus"}
	    }).click(function(e){
	  	var getUrl = 'glaccounts/template';
		var putUrl = "glaccounts";
		var templateSelector = "#glAccountsFormTemplate";
		var width = 600; 
		var height = 400;

		// update currently selected div if onclick function succeeds
		var saveSuccessFunction = function(data, textStatus, jqXHR) {
		  	$("#dialog-form").dialog("close");
		  	handleCOATabSelection();
		}

		popupDialogWithFormView(getUrl, putUrl, 'POST', "dialog.title.glAccountsFormTemplate.add.account", templateSelector, width, height,  saveSuccessFunction);
	    e.preventDefault();
	});

	/**
	 * Make a call to fetch details of appropriate GL Accounts on click of
	 * sub-tab of GL Accounts (All, ASSET, LIABILITY, EQUITY, INCOME, EXPENSES)
	 */
	$("#coatabs-main").tabs({
			select: function(event, tab) {
				/**
				 * clear previous div contents on selection change to avoid
				 * datatable refresh issue*
				 */
				$(divToUpdate).html('');
				fetchGLAccount(tab.index);
		 }
	});

	var fetchGLAccount = function (index){
		if (index == 0)
		{
			divToUpdate="#coatabs-all";
			executeAjaxRequest('glaccounts', 'GET', "", glAccountsFetchSuccessFunction, formErrorFunction);
		}
		// assets tab selected
		if (index == 1)
		{
			divToUpdate="#coatabs-asset";
			executeAjaxRequest('glaccounts?type=1', 'GET', "", glAccountsFetchSuccessFunction, formErrorFunction);
		}
		// liabilities tab selected
		if (index == 2)
		{
			divToUpdate="#coatabs-liabilities";
			executeAjaxRequest('glaccounts?type=2', 'GET', "", glAccountsFetchSuccessFunction, formErrorFunction);
		}
		// equity tab selected
		if (index == 3)
		{
			divToUpdate="#coatabs-equity";
			executeAjaxRequest('glaccounts?type=3', 'GET', "", glAccountsFetchSuccessFunction, formErrorFunction);
		}
		// income tab selected
		if (index == 4)
		{
			divToUpdate="#coatabs-income";
			executeAjaxRequest('glaccounts?type=4', 'GET', "", glAccountsFetchSuccessFunction, formErrorFunction);
		}
		// expenses tab selected
		if (index == 5)
		{
			divToUpdate="#coatabs-expenses";
			executeAjaxRequest('glaccounts?type=5', 'GET', "", glAccountsFetchSuccessFunction, formErrorFunction);
		}
	}



	//determine which tab is initially selected and reload data for the same
	var selected = $("#coatabs-main").tabs('option', 'selected');
	fetchGLAccount(selected);
}

//Handle Code Value Create and Update

function editCodeValueFunction(linkId, tableName){

    var entityId = linkId.replace("editcodevalue", "");
    var getUrl = tableName + "s/" + entityId + "/codevalues";
    var submitType = "GET";
    var dialogTitle = 'dialog.title.add.edit.code.value';
    var templateSelector = "#codeValueFormTemplate";
    var dialogWidth = 700;
    var dialogHeight = 500;

    var clearErrorsClass = function(){
        //clear previous error messages
        
        $(':input','#entityform').removeClass("ui-state-error");
        $('table td .ui-state-error').removeClass("ui-state-error");
    }

    var refreshCodeValues = function(data){
        //Load Code Values separately
        var codeValueFormDiv = $('#codeValue-table');
        var formHtml = $('#codeValueTableTemplate').render(data);
        codeValueFormDiv.html(formHtml);

        $(".codeValueName").editable(function(value, settings){
                $('#formerrors').html("");
                clearErrorsClass();                               
                value = value.trim();
                var ele = this;
                var searializedArray= {};
                var codeValueId = $(ele).attr("id").replace('name', "");
                searializedArray['name']= value;

                var jsonString =JSON.stringify(searializedArray);
                var codeValuesPostUrl = getUrl + '/' + codeValueId;
                var codeValueSubmitType = "PUT";
                var original = this.revert;
                var errorFormFunction = function(jqXHR, textStatus, errorThrown){
                    $('#formerrors').html("");
                    //Revert original value if error in response
                    $(ele).text(original);
                    formErrorFunction(jqXHR, textStatus, errorThrown);
                    clearErrorsClass();
                    $(ele).addClass("ui-state-error");
                }

                var updateSuccess = function(data, textStatus, jqXHR){
                    $('#formerrors').html("");
                    clearErrorsClass();
                    $(ele).text(value);
                }

                executeAjaxRequest(codeValuesPostUrl, codeValueSubmitType, jsonString, updateSuccess, errorFormFunction);
                return("");
            },
            {
                type: 'text',
                cancel: 'Cancel',
                submit: 'Update',
                placeholder: '',
                width: 150
        });

        $(".codeValuePosition").editable(function(value, settings){
                //clear previous error messages
                $('#formerrors').html("");
                clearErrorsClass();
                value = value.trim();
                var ele = this;
                var searializedArray= {};
                var codeValueId = $(this).attr("id").replace('position', "");
                searializedArray['position']= value;

                var jsonString =JSON.stringify(searializedArray);
                var codeValuesPostUrl = getUrl + '/' + codeValueId;
                var codeValueSubmitType = "PUT";
                var original = this.revert;

                var errorFormFunction = function(jqXHR, textStatus, errorThrown){
                    //clear previous error messages
                    $('#formerrors').html("");
                    //Revert original value if error in response
                    $(ele).text(original);
                    
                    formErrorFunction(jqXHR, textStatus, errorThrown);
                    
                    clearErrorsClass();
                    $(ele).addClass("ui-state-error");
                }

                var updateSuccess = function(data, textStatus, jqXHR){
                    $('#formerrors').html("");
                    clearErrorsClass();
                    $(ele).text(value);
                }

                executeAjaxRequest(codeValuesPostUrl, codeValueSubmitType, jsonString, updateSuccess, errorFormFunction);

                return("");
            },
            {
                type: 'text',
                cancel: 'Cancel',
                submit: 'Update',
                placeholder: '',
                width: 100
        });
        
        $('.deleteCodeValue').button().click(function(e){
            $('#formerrors').html("");
            clearErrorsClass();
            var codeValueId = $(this).attr("id").replace('deleteCodeValue', "");
            var codeValuesPostUrl = getUrl + '/' + codeValueId;
            var codeValueSubmitType = "DELETE";

            var errorFormFunction = function(jqXHR, textStatus, errorThrown){
                //clear previous error messages
                $('#formerrors').html("");
                formErrorFunction(jqXHR, textStatus, errorThrown);
            }

            var updateSuccess = function(data, textStatus, jqXHR){
                $('#formerrors').html("");
                var getsuccessFunction = function(data, textStatus, jqXHR){
                    var codeValues = new Object();
                    codeValues.crudRows = data;
                    refreshCodeValues(codeValues);
                }
                executeAjaxRequest(getUrl, "GET", "", getsuccessFunction, formErrorFunction);
            }

            executeAjaxRequest(codeValuesPostUrl, codeValueSubmitType, null, updateSuccess, errorFormFunction);
            e.preventDefault();
        });


    }

    var successFunction = function(data, textStatus, jqXHR) {

        var codeValues = new Object();
        codeValues.crudRows = data;
        codeValues.codeId = entityId;
        popupDialogWithReadOnlyFormViewData(codeValues, dialogTitle, templateSelector, dialogWidth, dialogHeight);
        refreshCodeValues(codeValues);
        $("#addCodeValue").button().click(function(e){
            clearErrorsClass();
            //clear previous error messages
            $('#formerrors').html("");
            var codeId = $("#addCodeValue").attr("data-codeId");
            var newFormData = JSON.stringify($('#entityform').serializeObject());

            var addsuccessFunction =  function(data, textStatus, jqXHR) {
                $(':input','#entityform').val('');
                var codeValuesuccessFunction = function(data, textStatus, jqXHR){
                    var codeValues = new Object();
                    codeValues.crudRows = data;
                    refreshCodeValues(codeValues);
                }
                executeAjaxRequest('codes/' + codeId + '/codevalues', "GET", "", codeValuesuccessFunction, formErrorFunction);

            };

            executeAjaxRequest('codes/' + codeId + '/codevalues', "POST", newFormData, addsuccessFunction, formErrorFunction);

           e.preventDefault();
        });

    }

    executeAjaxRequest(getUrl, "GET", "", successFunction, formErrorFunction);

}


function setReportingContent(divName) {

	var htmlVar = '<table id=toptable>';
 	htmlVar += '<tr>';
 	htmlVar += '  <td valign="top"><div id=myListOfReports></div></td>';
 	htmlVar += '  <td width="100px"></td>';
 	htmlVar += '  <td valign="bottom">';
 	htmlVar += '		<select id=decimalsChoice onChange="selectNewDecimals(options[selectedIndex].value)" >';
 	htmlVar += '		<option value="" selected="selected">' + doI18N("reporting.decimals") + '</option>';
 	htmlVar += '		<option value="4">4</option>';
 	htmlVar += '		<option value="3">3</option>';
 	htmlVar += '		<option value="2">2</option>';
 	htmlVar += '		<option value="1">1</option>';
 	htmlVar += '		<option value="0">0</option>';
 	htmlVar += '		<option value="-1">-1</option>';
 	htmlVar += '		<option value="-2">-2</option>';
 	htmlVar += '		<option value="-3">-3</option>';
 	htmlVar += '		</select>';
 	htmlVar += '   </td>';
 	htmlVar += '  <td valign="bottom">';
 	htmlVar += '		<select id=decimalsThousandsSep onChange="selectNewThousandsSep(options[selectedIndex].value)" >';
 	htmlVar += '		<option value="" selected="selected">' + doI18N("reporting.format") + '</option>';
 	htmlVar += '		<option value=",.">1,234,567.89</option>';
 	htmlVar += '		<option value=".,">1.234.567,89</option>';
 	htmlVar += '		<option value=" ,">1 234 567,89</option>';
 	htmlVar += '		<option value=" .">1 234 567.89</option>';
 	htmlVar += '		<option value=".' + "'" + '">1.234.567' + "'" + '89</option>';
 	htmlVar += '		<option value="' + "'" + ',">1'+ "'" + '234' + "'" + '567,89</option>';
 	htmlVar += '		<option value="INDIAN">Indian 12,34,567.89</option>';
 	htmlVar += '		<option value="NONE">None 1234567.89</option>';
 	htmlVar += '		</select>';
 	htmlVar += '   </td>';
 	htmlVar += '  <td valign="top"><div id=myRunReportButton></div></td>';
 	htmlVar += '  <td valign="top"><div id=myClearReportButton></div></td>';
 	htmlVar += '  <td valign="bottom"><div id=reportOutputOptionsDiv></div></td>';
 	htmlVar += '</tr>';
 	htmlVar += '</table>';
 	htmlVar += '<div id=myInputParameters></div>';
 	htmlVar += '<div id=myOutput></div>'; 

	$("#" + divName).html(htmlVar);
}

function setAccountSettingsContent(divName) {

	var htmlVar = '<div id="tabs">';
	htmlVar += '	<ul>';
	htmlVar += '		<li><a href="#settingstab" title="settings">' + doI18N("tab.settings") + '</a></li>';
	htmlVar += '	</ul>';
	htmlVar += '	<div id="settings"></div>';
	htmlVar += '</div>';

	$("#" + divName).html(htmlVar);
}

$.urlConstructor = function(sSource,oSettings){
	if(typeof oSettings.aaSorting[0] ==='undefined')
	{
		return baseApiUrl + sSource;
	}else
		return baseApiUrl + sSource +"?orderBy="+oSettings.aoColumns[(oSettings.aaSorting[0][0])].mDataProp+"&sortOrder="+oSettings.aaSorting[0][1];

}

$.prepareDataToSend = function(oSettings, data){
	
	var jsonData = {
			offset:oSettings._iDisplayStart,
			limit:oSettings._iDisplayLength,
	};

	if(oSettings.oPreviousSearch.sSearch !="")
	{
		var searchValue = oSettings.oPreviousSearch.sSearch;
		searchValue = searchValue.replace("'", "''");
		//office hierarchy dropdown does not appear for branch users
		var sqlSearchValue = "display_name like '%" + searchValue + "%'";
		jsonData.sqlSearch = sqlSearchValue;
	}
	//not appropriate here 
	if($("#officeId").val()!= undefined)
	{
		jsonData.underHierarchy =  encodeURIComponent($("#officeId").val())
	}
	$.extend(jsonData,data);
	return jsonData;
}

var serverData = function(data)
{
	
	 return function (sSource, aoData, fnCallback, oSettings) {
		 oSettings.jqXHR = $.ajax({ 
							url : $.urlConstructor(sSource,oSettings),
							type : "GET", //POST, GET, PUT or DELETE 
							contentType : "application/json; charset=utf-8", 
							dataType : 'json', 
							data : $.prepareDataToSend(oSettings,data), 
							cache : false, 
							beforeSend : function(xhr) { 
									if (tenantIdentifier > "") xhr.setRequestHeader("X-Mifos-Platform-TenantId", tenantIdentifier); 
									if (base64 > "") xhr.setRequestHeader("Authorization", "Basic " + base64); 
								}, 
							success : function (json) {
				            	var data = {
				            		iTotalRecords : 200, //no need of this
				            		iTotalDisplayRecords : json.totalFilteredRecords,
				            		//sEcho:3, //this should be matched
				            		aaData:json.pageItems
				            	};				                         
				                fnCallback(data);
				            }
						}); 
   }
}

var initTableConf = function (tableId,oTable)
{
	//Unbind search functoin on keypress
	$("#"+tableId+"_filter input").unbind();
	//Bind search function on enter key
	$("#"+tableId+"_filter input").bind('keyup', function(e) {
   			if(e.keyCode == 13) {
    			oTable.fnFilter(this.value);   
			}
		}); 
}

function showILClientListing() {

	if (jQuery.MifosXUI.showTask("clientSearch") == false)
	{
		alert(doI18N("client.search.not.allowed"));
		return;
	}

	setClientListingContent("content");

	//HOME list clients functionality
	$("#tabs").tabs({
	    select: function(event, ui) {
	    },
	    load: function(event, ui) {
	    },
	    show: function(event, ui) {

			var initClientSearch =  function() {  	
			//render page markup
			var tableHtml = $("#clientSearchTabTemplate").render();
			$("#searchtab").html(tableHtml);

			var clientsTableHtml = $("#clientsTableTemplate").render();
			$("#clientTableDiv").html(clientsTableHtml);

			var oTable = $("#clientstable").dataTable(custom.jqueryDataTableServerSide.paginated("clientstable"));
			initTableConf("clientstable",oTable);

			//fetch all Offices 
			var officeSearchSuccessFunction =  function(data) {
				var officeSearchObject = new Object();
			    officeSearchObject.crudRows = data;
				var tableHtml = $("#officesDropdownTemplate").render(officeSearchObject);
				$("#clientstablecustom").html(tableHtml);

				// add client filter behaviour
				$("#officeId").change(function(){
					oTable.fnDraw();
				})
		  	};
		  	executeAjaxRequest('offices', 'GET', "", officeSearchSuccessFunction, formErrorFunction);			
	    };
	  	  //initialize the client search tab
		 initClientSearch();
	 }
	});

	var addClientSuccessFunction = function(data, textStatus, jqXHR) {
		  $('#dialog-form').dialog("close");
		  
		  if (data.resourceId) {
			  showILClient(data.resourceId);
		  } else {
			  showILClientListing();
		  }
	}
	
	$("#addclient").button().click(function(e) {
		var getUrl = 'clients/template';
		var postUrl = 'clients';
		var templateSelector = "#clientFormTemplate";
		var width = 900; 
		var height = 380;
		
		popupDialogWithFormView(getUrl, postUrl, 'POST', 'dialog.title.add.client', templateSelector, width, height, addClientSuccessFunction);
		
	    e.preventDefault();
	});
} // end showILClientListing

//HOME list centers functionality
function showCenterListing(){

	if (jQuery.MifosXUI.showTask("groupSearch") == false)
	{
		alert(doI18N("group.search.not.allowed"));
		return;
	}

	setCenterListingContent("content");

	$("#tabs").tabs({
	    select: function(event, ui) {
	    },
	    load: function(event, ui) {
	    },
	    show: function(event, ui) {
			var initSearch =  function() {
				//render page markup
				var tableHtml = $("#centerManageTabTemplate").render();
				$("#searchtab").html(tableHtml);
				
				//fetch all Offices 
				var officeSearchSuccessFunction =  function(data) {
					var officeSearchObject = new Object();
				    officeSearchObject.crudRows = data;
					var tableHtml = $("#allOfficesListTemplate").render(officeSearchObject);
					$("#officesInScopeDiv").html(tableHtml);
			  	};
			  	executeAjaxRequest('offices', 'GET', "", officeSearchSuccessFunction, formErrorFunction);
				
				//render group drop down data
				var centerSearchSuccessFunction =  function(data) {
					var centerSearchObject = new Object();
				    centerSearchObject.crudRows = data;
					var tableHtml = $("#allCentersListTemplate").render(centerSearchObject);
					$("#centersInScopeDiv").html(tableHtml);
			  	};
				executeAjaxRequest('centers/?underHierarchy=.', 'GET', "", centerSearchSuccessFunction, formErrorFunction);
	  			
	    		//search group functionality
				var searchSuccessFunction =  function(data) {
					var groupSearchObject = new Object();
				    groupSearchObject.crudRows = data;
					var tableHtml = $("#groupsTableTemplate").render(groupSearchObject);
					$("#groupTableDiv").html(tableHtml);
				    var oTable=displayListTable("groupstable");
			  	};
				
				//initialize search button				
				$("#searchGroupBtn").button({
					icons: {
		                primary: "ui-icon-search"
		            }
		         }).click(function(e){
		         	//get selected office
		         	var officeHierarchy = $("#officeId").val();
		         	//get search parameter
					var searchValue = $("#groupSearchInput").val();
					searchValue = searchValue.replace("'", "''");
					//office hierarchy dropdown does not appear for branch users
					var sqlSearchValue = "name like '%" + searchValue + "%'"; 
					if(officeHierarchy){
						executeAjaxRequest("groups?sqlSearch=" + encodeURIComponent(sqlSearchValue)+ "&underHierarchy=" + encodeURIComponent(officeHierarchy), 'GET', "", searchSuccessFunction, formErrorFunction);
					}else{
						executeAjaxRequest("groups?sqlSearch=" + encodeURIComponent(sqlSearchValue), 'GET', "", searchSuccessFunction, formErrorFunction);
					}
					e.preventDefault();
			   	});
	    	};

	    	initSearch();
	    }
	});
}

//HOME list groups functionality
function applyGroupSearchFilter(officeHierarchy) {
	//re-render client drop down data
	var searchSuccessFunction =  function(data) {
		var searchObject = new Object();
		searchObject.crudRows = data;
		var tableHtml = $("#allGroupsDropdownTemplate").render(searchObject);
		$("#groupsInScopeDiv").html(tableHtml);
	};
	var sqlSearchValue = "o.hierarchy like '"+ officeHierarchy +"%'";
	executeAjaxRequest("groups?underHierarchy=" + encodeURIComponent(officeHierarchy), 'GET', "", searchSuccessFunction, formErrorFunction);
}


//generic UI/dialog components 
function gernericDialog(dialogDiv, dialogTitleCode, width, height, onOpenFunc, onSaveFunc) {
	var saveButton = doI18N('dialog.button.save');
	var cancelButton = doI18N('dialog.button.cancel');
	
	var buttonsOpts = {};
	buttonsOpts[saveButton] = onSaveFunc;
	buttonsOpts[cancelButton] = function() {$(this).dialog( "close" );};
	
	dialogDiv.dialog({
  		title: doI18N(dialogTitleCode), 
  		width: width, 
  		height: height, 
  		modal: true,
  		buttons: buttonsOpts,
  		close: function() {
  			// if i dont do this, theres a problem with errors being appended to dialog view second time round
  			$(this).remove();
		},
  		open: onOpenFunc
  	}).dialog('open');
}

// standard group form (group + clients, no parents)
function loadGroupForm(container, officeId, templateIdentifier) {
	
	var renderOnSuccessFunction = function(data, textStatus, jqXHR) {
		var formHtml = $(templateIdentifier).render(data);
		container.html(formHtml);
		
		$("#dialog-form #officeId").change(function() {
			var selectedValue = $(this).find(":selected").val();
			loadGroupForm(container, selectedValue, templateIdentifier);
		});

		$('.multiadd').click(function() {  
			return !$('.multiNotSelectedItems option:selected').remove().appendTo('#clientMembers');  
		});
		
		$('.multiremove').click(function() {  
			return !$('.multiSelectedItems option:selected').remove().appendTo('#notSelectedClients');  
		});
		
		$('.datepickerfield').datepicker({constrainInput: true, dateFormat: custom.datePickerDateFormat});
		
		$("#entityform textarea").first().focus();
		$('#entityform input').first().focus();
	};
	
	executeAjaxRequest('groups/template?officeId=' + officeId, 'GET', "", renderOnSuccessFunction, formErrorFunction);
}

function saveGroup(divContainer, groupId) {
	var serializationOptions = {};
	serializationOptions["checkboxesAsBools"] = true;
	
	$('#notSelectedClients option').each(function(i) {
		$(this).attr("selected", "selected");
	});
	$('#clientMembers option').each(function(i) {
		$(this).attr("selected", "selected");
	});
	
	var serializedArray = {};
	serializedArray = $('#entityform').serializeObject(serializationOptions);
	
	var newFormData = JSON.stringify(serializedArray);
	
	var successFunction =  function(data, textStatus, jqXHR) {
		divContainer.dialog("close");

		if (groupId === undefined || groupId == null) {
			groupId = data.resourceId;
		}
		showGroup(groupId);
	};
	
	if (groupId) {
		executeAjaxRequest('groups/' + groupId, "PUT", newFormData, successFunction, formErrorFunction);
	} else {
		executeAjaxRequest('groups', "POST", newFormData, successFunction, formErrorFunction);	
	}
}

var launchStandardGroupDialogOnSuccessFunction = function(data, textStatus, jqXHR) {
	
	var dialogDiv = $("<div id='dialog-form'></div>");

	var groupId = data.id;
	
	var templateIdentifier = "#standardGroupFormTemplate";
	if (groupId) {
		templateIdentifier = "#standardGroupEditFormTemplate";
	}
	
	var openGroupDialogFunc = function (event, ui) {
		var formHtml = $(templateIdentifier).render(data);
		$("#dialog-form").html(formHtml);
		
		$("#dialog-form #officeId").change(function() {
			var selectedValue = $(this).find(":selected").val();
			loadGroupForm(dialogDiv, selectedValue, templateIdentifier);
		});
		
		$('.multiadd').click(function() {  
			return !$('.multiNotSelectedItems option:selected').remove().appendTo('#clientMembers');  
		});
		
		$('.multiremove').click(function() {  
			return !$('.multiSelectedItems option:selected').remove().appendTo('#notSelectedClients');  
		});
		
		$('.datepickerfield').datepicker({constrainInput: true, dateFormat: custom.datePickerDateFormat});
		
		$("#entityform textarea").first().focus();
		$('#entityform input').first().focus();
	}
	
	var saveNewGroupFunc = function() {
		saveGroup(dialogDiv, groupId);
	};
	
	var dialog = null;
	if (groupId) {
		dialog = gernericDialog(dialogDiv, 'dialog.title.edit.group', 900, 450, openGroupDialogFunc, saveNewGroupFunc);	
	} else {
		dialog = gernericDialog(dialogDiv, 'dialog.title.add.group', 900, 450, openGroupDialogFunc, saveNewGroupFunc);
	}
};

var launchCenterGroupDialogOnSuccessFunction = function(data, textStatus, jqXHR) {
	
	var dialogDiv = $("<div id='dialog-form'></div>");

	var groupId = data.id;
	
	var templateIdentifier = "#centerGroupFormTemplate";
	if (groupId) {
		templateIdentifier = "#centerGroupEditFormTemplate";
	}
	
	var openGroupDialogFunc = function (event, ui) {
		var formHtml = $(templateIdentifier).render(data);
		$("#dialog-form").html(formHtml);
		
		$("#dialog-form #officeId").change(function() {
			var selectedValue = $(this).find(":selected").val();
			loadGroupForm(dialogDiv, selectedValue, templateIdentifier);
		});
		
		$('.multiadd').click(function() {  
			return !$('.multiNotSelectedItems option:selected').remove().appendTo('#clientMembers');  
		});
		
		$('.multiremove').click(function() {  
			return !$('.multiSelectedItems option:selected').remove().appendTo('#notSelectedClients');  
		});
		
		$('.datepickerfield').datepicker({constrainInput: true, dateFormat: custom.datePickerDateFormat});
		
		$("#entityform textarea").first().focus();
		$('#entityform input').first().focus();
	}
	
	var saveNewGroupFunc = function() {
		saveGroup(dialogDiv, groupId);
	};

	var dialog = null;
	if (groupId) {
		dialog = gernericDialog(dialogDiv, 'dialog.title.edit.group', 900, 500, openGroupDialogFunc, saveNewGroupFunc);	
	} else {
		dialog = gernericDialog(dialogDiv, 'dialog.title.add.group', 900, 500, openGroupDialogFunc, saveNewGroupFunc);
	}
};

function launchGroupDialog(groupId) {
	
	if (groupId) {
		executeAjaxRequest('groups/' + groupId + '?template=true&associations=clientMembers', 'GET', "", launchStandardGroupDialogOnSuccessFunction, formErrorFunction);
	} else {
		executeAjaxRequest('groups/template', 'GET', "", launchStandardGroupDialogOnSuccessFunction, formErrorFunction);		
	}
}

function launchCenterGroupDialog(groupId) {
	
	if (groupId) {
		executeAjaxRequest('groups/' + groupId + '?template=true&associations=clientMembers', 'GET', "", launchCenterGroupDialogOnSuccessFunction, formErrorFunction);
	} else {
		executeAjaxRequest('groups/template', 'GET', "", launchCenterGroupDialogOnSuccessFunction, formErrorFunction);		
	}
}

function showNewCenterListing(){

	//Add centerSearch to BillingUI
	if (jQuery.MifosXUI.showTask("groupSearch") == false)
	{
		alert(doI18N("center.search.not.allowed"));
		return;
	}

	setNewCenterListingContent("content");

	//HOME list clients functionality
	$("#tabs").tabs({
	    select: function(event, ui) {
	    },
	    load: function(event, ui) {
	    },
	    show: function(event, ui) {

	    var initCenterSearch =  function() {
			//render page markup
			var tableHtml = $("#centerSearchTabTemplate").render();
			$("#searchtab").html(tableHtml);
			
			var centerTableHtml = $("#centerTableTemplate").render();
			$("#centerTableDiv").html(centerTableHtml);
			
			var oTable = $("#centerstable").dataTable(custom.jqueryDataTableServerSide.paginated("centerstable"));
			initTableConf("centerstable",oTable);
			
			//fetch all Offices 
			var officeSearchSuccessFunction =  function(data) {
				var officeSearchObject = new Object();
			    officeSearchObject.crudRows = data;
				var tableHtml = $("#officesDropdownTemplate").render(officeSearchObject);
				$("#centerstablecustom").html(tableHtml);

				// add center filter behaviour
				$("#officeId").change(function(){
					oTable.fnDraw();
				})
		  	};
		  	executeAjaxRequest('offices', 'GET', "", officeSearchSuccessFunction, formErrorFunction);
	    };
	    
	    initCenterSearch();
	 }
	});

	$("#addCenter").button().click(function(e) {
		addCenter();
	    e.preventDefault();
	});
}

function showGroupListing(){

	if (jQuery.MifosXUI.showTask("groupSearch") == false)
	{
		alert(doI18N("group.search.not.allowed"));
		return;
	}

	setGroupListingContent("content");

	//HOME list clients functionality
	$("#tabs").tabs({
	    select: function(event, ui) {
	    },
	    load: function(event, ui) {
	    },
	    show: function(event, ui) {

	    var initGroupSearch =  function() {
			//render page markup
			var tableHtml = $("#groupSearchTabTemplate").render();
			$("#searchtab").html(tableHtml);
			
			var groupTableHtml = $("#groupTableTemplate").render();
			$("#groupTableDiv").html(groupTableHtml);

			var oTable = $("#groupstable").dataTable(custom.jqueryDataTableServerSide.paginated("groupstable"));
			initTableConf("groupstable",oTable);
			
			//fetch all Offices 
			var officeSearchSuccessFunction =  function(data) {
				var officeSearchObject = new Object();
			    officeSearchObject.crudRows = data;
				var tableHtml = $("#officesDropdownTemplate").render(officeSearchObject);
				$("#groupstablecustom").html(tableHtml);

				// add client filter behaviour
				$("#officeId").change(function(){
					oTable.fnDraw();
				})
		  	};
		  	executeAjaxRequest('offices', 'GET', "", officeSearchSuccessFunction, formErrorFunction);					
	    };
	    
	    initGroupSearch();
	 }
	});

	$("#addstandardgroup").button().click(function(e) {
		launchGroupDialog();
	    e.preventDefault();
	});
}

//HOME list communal banks functionality
function showCommunalBankListing(){

	if (jQuery.MifosXUI.showTask("groupSearch") == false)
	{
		alert(doI18N("group.search.not.allowed"));
		return;
	}

	setCommunalBankListingContent("content");
	
	$("#tabs").tabs();
}

//Add new group under a center dialog
function addCenterGroup(officeId, centerId) {
	
		var addGroupSuccessFunction = function(data, textStatus, jqXHR) {
			$('#dialog-form').dialog("close");
			showGroup(data.resourceId);
		}
		
		if(centerId === undefined) {
			
			if (officeId === undefined) {
				getUrl = 'groups/template?center=true';
			} else {
				getUrl = 'groups/template?officeId=' + officeId + '&center=true';
			}
		}
		else {
			var getUrl = 'groups/template?centerId='+centerId;
		}

		var postUrl = 'groups';
		var templateSelector = "#centerGroupBlankFormTemplate";
		var width = 900; 
		var height = 500;
		var title = 'dialog.title.add.group';
		
		popupDialogWithFormView(getUrl, postUrl, 'POST', title , templateSelector, width, height, addGroupSuccessFunction);
}

//Add new center
function addCenter() {
	
		var addCenterSuccessFunction = function(data, textStatus, jqXHR) {
			$('#dialog-form').dialog("close");
			showCenter(data.resourceId);
		}

		var getUrl = 'centers/template';
		var postUrl = 'centers';
		var templateSelector = "#centerFormTemplate";
		var width = 900; 
		var height = 500;
		var title = 'dialog.title.create.center';
		
		popupDialogWithFormView(getUrl, postUrl, 'POST', title , templateSelector, width, height, addCenterSuccessFunction);
}

// Add New Client 
function addClient(officeId, parentGroupId){

		var addClientSuccessFunction = function(data, textStatus, jqXHR) {
		  $('#dialog-form').dialog("close");
		  showGroup(parentGroupId);
		}

		var getUrl = 'clients/template';
		var postUrl = 'clients';
		var templateSelector = "#clientFormTemplate";
		var width = 600; 
		var height = 350;
		
		var extraParam = '{"officeId":"'+ officeId + '" , "groupId":"'+ parentGroupId +'"}';
		popupDialogWithFormView(getUrl, postUrl, 'POST', 'dialog.title.add.client', templateSelector, width, height, addClientSuccessFunction , extraParam);
}


//set scope for center search
function applyCenterSearchFilter(officeHierarchy) {
	//re-render group drop down data
	$('#officeId').val(officeHierarchy);
	var centerSearchSuccessFunction =  function(data) {
		var centerSearchObject = new Object();
	    centerSearchObject.crudRows = data;
		var tableHtml = $("#allCentersListTemplate").render(centerSearchObject);
		$("#centersInScopeDiv").html(tableHtml);
	};
	var sqlSearchValue = "o.hierarchy like '"+ officeHierarchy +"%'";
	executeAjaxRequest("centers?underHierarchy=" + encodeURIComponent(officeHierarchy), 'GET', "", centerSearchSuccessFunction, formErrorFunction);
}

//loanId, product, loanAccountNo is passed to open loan account in client details
//On click of loan from global search, first show client then load loan account

function showLoanFromSearch(clientId, loanId, product, loanAccountNo){
    
    showILClient(clientId);
        
    if(!(typeof loanId === "undefined" && typeof product === "undefined" && typeof loanAccountNo === "undefined" )){
        showILLoan(loanId, product, loanAccountNo);
        var newLoanTabId='loan'+loanId+'tab';
        var index = $('#clientdatatabs a[href="#'+ newLoanTabId +'"]').parent().index(); 
        $('#clientdatatabs').tabs('select', index);
    }
    
    
}

function showILClient(clientId) {
	var clientUrl = 'clients/' + clientId;

	setClientContent("content");
	
	$newtabs = $("#clientdatatabs").tabs({
			    	select: function(event, tab) {
				
	    	
				if (tab.index == 0)

				{  
					if (clientDirty == true)
					{
						//refreshLoanSummaryInfo(clientUrl);
						refreshNoteWidget(clientUrl, 'clienttabrightpane');
						

						clientDirty = false;
					}
				}
				
				else if (tab.index == 1)
				{
					refreshClientIdentifiers(clientUrl);
				}
				else if (tab.index == 2){
					refreshClientDocuments(clientUrl);
				}
				/*else if (tab.index == 3){
					refreshInventoryItemDetails(divName);
				}*/
				
				else if (tab.index == 3){
					refreshOwnedHardwareDetails(clientUrl);
				}
				
				else if (tab.index == 4){
					refreshClientOrders(clientUrl);
				}
				
				else if (tab.index == 5){
					
					refreshClientOneTimeSaleDetails(clientUrl);
				}
				
				else if (tab.index == 6){
					
					refreshClientTransacton(clientUrl);
				}
				
				else if (tab.index == 7){
					refreshClientbillstatments(clientUrl);
				}
				/*else if (tab.index == 8){
					refreshUploadDetails(clientUrl);
				}*/
				/*else if (tab.index == 8){
					refreshClientUploadStatus(clientUrl);
				}*/
				else if(tab.index == 8){
					refreshClientTicketDetails(clientUrl);
				}
				else if (tab.index == 9) {
					refreshTransactionHistoryDetails(clientUrl);
				}
	    		},
		"add": function( event, ui ) {
				$newtabs.tabs('select', '#' + ui.panel.id);
			}
	});
	
	var errorFunction = function(jqXHR, textStatus, errorThrown, index, anchor) {
		handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
	};
	        
	//initialize client image related buttons
	var imageFetchSuccessFunction = function(data, textStatus, jqXHR) {
		$("#customerImage").attr("src",data);
	};
	var successFunction =  function(data, textStatus, jqXHR) {
		
	};


	var successFunction = function(data, status, xhr) {
					//do we fetch image data?
					if(data.imagePresent == true){
						executeAjaxRequestForImageDownload('clients/' + clientId + '/images', 'GET', imageFetchSuccessFunction, errorFunction);	
					}
				//	executeAjaxRequest(clientUrl + '/loans', 'GET', "", successFunction, formErrorFunction);	  	
				
	        		currentClientId = clientId;
	        		clientDirty = false; //intended to refresh client if some data on its display has changed e.g. loan status or notes
	        		var currentTabIndex = $newtabs.tabs('option', 'selected');
	            	var currentTabAnchor = $newtabs.data('tabs').anchors[currentTabIndex];
	            
	            	//populate main content
	            	var crudObject = new Object();
	            	var tableHtml = $("#clientToolbarTemplate").render(data);
	            	$("#clienttoolbar").html(tableHtml);
	            	
	        		var tableHtml = $("#clientDataTabTemplate").render(data);
					$("#clienttab").html(tableHtml);
					
					var successFunction =  function(data, textStatus, jqXHR) {
						//var tableHtml = $("#clientBalanceTemplate").append(data);
						$("#customerBalance").html(data.balanceAmount);
					};
					executeAjaxRequest('clientBalance/template/'+clientId, 'GET', "", successFunction, formErrorFunction);	
					
					var successFunction =  function(data, textStatus, jqXHR) {
						if(data.city){
						$("#addressNo").html(data.addressNo+',');
						$("#street").html(data.street+',');
						$("#city").html(data.city+',');
						$("#state").html(data.state+',');
						$("#country").html(data.country+',');
						$("#zip").html(data.zip);
						
						
						var addrId=data.id;
						
						$("#btn").html('<br/><a id="editaddrbtn" class="editaddrbtn" href=# style=margin-right: 5px; onClick="editAddress('+clientId+','+addrId+');return false;" >Edit Address</a>');
					}
					else
						{
						//$("#addbtn").html('<button id="newaddbtn" class="newaddbtn" >Add Address</button>');
						//$("#addbtn").html('<br/><a id="newaddbtn" class="newaddbtn" href=# style=margin-right: 5px; >Add Address</a>');
						}
					};
					executeAjaxRequest('address/details/'+clientId, 'GET', "", successFunction, formErrorFunction);	
					
					$('.activateclient').button({icons: {primary: "ui-icon-circle-check"}}).click(function(e) {
						var linkId = this.id;
						var getUrl = 'clients/' + clientId + '?command=activate&template=true';
						var postUrl = 'clients/' + clientId + '?command=activate';
						var templateSelector = "#activationTemplate";
						var width = 400; 
						var height = 225;

						var saveSuccessFunction = function(data, textStatus, jqXHR) {
						  	$("#dialog-form").dialog("close");
						  	showILClient(clientId);
						}
						
						popupDialogWithFormView(getUrl, postUrl, 'POST', 'dialog.title.activation', templateSelector, width, height, saveSuccessFunction);
					    e.preventDefault();
					});
					$('button.activateclient span').text(doI18N('button.activate'));
					
					$('.deleteclientbtn').button({icons: {
               			 primary: "ui-icon-trash"}
                	}).click(function(e) {
						var url = 'clients/' + clientId;
						var width = 400; 
						var height = 225;
												
						popupConfirmationDialogAndPost(url, 'DELETE', 'dialog.title.confirmation.required', width, height, 0, saveSuccessFunctionReloadClientListing);
						e.preventDefault();
					});
					$('button.deleteclientbtn span').text(doI18N('link.action.delete'));
					
					$('.editclientbtn').button({icons: {primary: "ui-icon-pencil"}}).click(function(e) {
						var getUrl = 'clients/' + clientId + '?template=true';
						var putUrl = 'clients/' + clientId;
						var templateSelector = "#editClientFormTemplate";
						var width = 600; 
						var height = 420;
						
						var saveSuccessFunction = function(data, textStatus, jqXHR) {
						  	$("#dialog-form").dialog("close");
						  	showILClient(clientId);
						}
						
						popupDialogWithFormView(getUrl, putUrl, 'PUT', "dialog.title.edit.client", templateSelector, width, height,  saveSuccessFunction);
					    e.preventDefault();
					});
					$('button.editclientbtn span').text(doI18N('link.action.edit'));
					
					 $('.newordertbtn').button({icons: {
						    primary: "ui-icon-comment"}
						  }).click(function(e) {
								var officeId = $(this).attr("data-planCode");
								var getUri = 'orders/'+officeId+'/template';
								var postUrl = 'orders/' + clientId ;
								var width = 700; 
								var height = 400;
								var htmlvar=$("#allBillingFreqsDropdownTemplate");
								$("#frequencyDiv").html(htmlvar);
									var saveSuccessFunction = function(data, textStatus, jqXHR) {
									  	$("#dialog-form").dialog("close");
									  	refreshClientOrders(clientUrl);
									  	
									};
									e.preventDefault();
								
									var htmlvar=$("#allBillingFreqsDropdownTemplate").render(data);
									$("#frequencyDiv").html(htmlvar);
					popupDialogWithFormView('orders/template', postUrl, "POST", "Orders", "#orderFormTemplate",width,height, saveSuccessFunction); 
						  });
					 
					 $('.newpaymentbtn').button({icons: { primary: "ui-icon-document"}}).click(function(e) {
                		var getUrl ='payments/template?clientId=' + clientId;
					var postUrl = 'payments/'+clientId ;
					var templateSelector = "#paymentFormTemplate";
					var width = 650; 
					var height = 350;
					
					var saveSuccessFunction = function(data, textStatus, jqXHR) {
					  
						$("#dialog-form").dialog("close");
						showILClient(clientId);
					  	
					};
					
					popupDialogWithFormView(getUrl, postUrl, 'POST', "Payments", templateSelector, width, height,saveSuccessFunction );
					e.preventDefault();
					  });
					$('button.newpaymentbtn span').text(doI18N('dialog.button.new.payment'));
					
					$('.addadjustments').button({icons: {
           			 primary: "ui-icon-comment"}
            	}).click(function(e) {
			
						var postUrl = 'adjustments/' + clientId ;
						var getUrl ='adjustments/template';
						var templateSelector = "#addadjustmentFormTemplate";
						var width = 550; 
						var height = 350;
						
						var saveSuccessFunction = function(data, textStatus, jqXHR) {
						  	$("#dialog-form").dialog("close");
						  	showILClient(clientId);
						}
						
						popupDialogWithFormView(getUrl, postUrl, 'POST', "Adjustments", templateSelector, width, height,  saveSuccessFunction);
					    e.preventDefault();
					});
					
					 $('.invoicebtn').button({icons: {
               			 primary: "ui-icon-document"}
                	}).click(function(e) {
                	
                		var postUrl = 'billingorder/'+clientId;
					var templateSelector = "#invoiceFormTemplate";
					var width = 350; 
					var height = 200;
					
					
					var saveSuccessFunction = function(data, textStatus, jqXHR) {
						 
						$("#dialog-form").dialog("close");
						showILClient(clientId);
					};
					
				
					popupDialogWithFormView("", postUrl, 'POST', "Invoicing", templateSelector, width, height,saveSuccessFunction );
					e.preventDefault();
					  });
					$('button.invoicebtn span').text(doI18N('dialog.button.new.invoice'));
					
					 $('.genpdfbtn').button({icons: {
               			 primary: "ui-icon-document"}
                	}).click(function(e) {
                		var url = 'billmaster/' + clientId;
                		var templateSelector = "#billStatementFormTemplate";
						var width = 630; 
						var height = 300;
						
						var saveSuccessFunction = function(data, textStatus, jqXHR) {
							$("#dialog-form").dialog("close");
							$('#saveButton').button ("disable");
							refreshClientbillstatments(clientUrl);
						};
						//popupConfirmationDialogAndPost(url, 'POST', 'dialog.title.confirmation.required', width, height, 0, saveSuccessFunction);
						popupDialogWithFormView("", url, 'POST', "Bill Pdf", templateSelector, width, height,  saveSuccessFunction);
						e.preventDefault();
					});
                		
					$('button.genpdfbtn span').text(doI18N('dialog.button.new.pdf'));
					
					
					 $('.regticketbtn').button({icons: {
               			 primary: "ui-icon-document"}
                	}).click(function(e) {
                		var posturl = 'tickets/' + clientId;
                		var getUrl ='tickets/template';
                		var templateSelector = "#ticketmasterFormTemplate";
                		var width = 600; 
						var height = 350;
						
						var saveSuccessFunction = function(data, textStatus, jqXHR) {
							  
							$("#dialog-form").dialog("close");
							$('#saveButton').button ("disable");
							refreshClientTicketDetails(clientUrl);
						
						};
												
						//popupConfirmationDialogAndPost(url, 'POST', 'dialog.title.confirmation.required', width, height, 0, saveSuccessFunction);
						popupDialogWithFormView(getUrl, posturl, 'POST', "Add Ticket", templateSelector, width, height,  saveSuccessFunction);
						e.preventDefault();
					});
                		
					$('button.regticketbtn span').text(doI18N('dialog.button.new.ticket'));
					
					$('.newindividualloanbtn').button({icons: {primary: "ui-icon-document"}}).click(function(e) {
                		launchLoanApplicationDialog(clientId);
					    e.preventDefault();
					});
					$('button.newindividualloanbtn span').text(doI18N('dialog.button.new.loan.application'));
					
					$('.newdepositbtn').button({icons: {
               			 primary: "ui-icon-document-b"}
                	}).click(function(e) {
						addILDeposit(clientId);
						e.preventDefault();
					});
					$('button.newdepositbtn span').text(doI18N('dialog.button.new.deposit.application'));
					
					$('.newsavingbtn').button({icons: {primary: "ui-icon-document"}}).click(function(e) {
						launchSavingsAccountDialog(clientId);
					    e.preventDefault();
					});
					$('button.newsavingbtn span').text(doI18N('dialog.button.new.savings.account'));
					
					$('.addnotebtn').button({icons: {primary: "ui-icon-comment"}}).click(function(e) {
						var postUrl = 'clients/' + clientId + '/notes';
						var templateSelector = "#noteFormTemplate";
						var width = 600; 
						var height = 400;
						
						var saveSuccessFunction = function(data, textStatus, jqXHR) {
						  	$("#dialog-form").dialog("close");
							refreshNoteWidget('clients/' + clientId, 'clienttabrightpane');
						}
						
						popupDialogWithFormView("", postUrl, 'POST', "dialog.title.add.note", templateSelector, width, height,  saveSuccessFunction);
					    e.preventDefault();
					});
					$('button.addnotebtn span').text(doI18N('dialog.button.add.note'));

					refreshNoteWidget(clientUrl, 'clienttabrightpane');

					custom.showRelatedDataTableInfo($newtabs, "m_client", clientId); 
					
					$('#captureClientImage').button(
						{icons: {
	                	primary: "ui-icon-camera"},
	                	text: false
	            	}).click(function(e) {
	            		var imageUploadSuccessFunction = function(data, textStatus, jqXHR) {
	            			$("#dialog-form").dialog("close");
							$("#customerImage").attr("src",imageCanvas.toDataURL("image/jpeg"));
						};
						var templateSelector = "#clientImageWebcamFormTemplate";
						var width = 775; 
						var height = 400;
	            		popupDialogWithFormView("", 'clients/' + clientId + '/images', 'POST', "dialog.title.edit.client.image", templateSelector, width, height,  imageUploadSuccessFunction);
	            		var pos = 0; 
	            		var ctx = null; 
	            		var image = [];
	            		$('#imageCanvas').html('');
						var imageCanvas = $('#imageCanvas')[0];
     	            	ctx = imageCanvas.getContext("2d");
     	            	image = ctx.getImageData(0, 0, 320, 240);
     	            	
						saveCB = function(data) {
							var col = data.split(";");
							var img = image;
							for(var i = 0; i < 320; i++) {
								var tmp = parseInt(col[i]);
								img.data[pos + 0] = (tmp >> 16) & 0xff;
								img.data[pos + 1] = (tmp >> 8) & 0xff;
								img.data[pos + 2] = tmp & 0xff;
								img.data[pos + 3] = 0xff;
								pos+= 4;
							}
				
							if (pos >= 4 * 320 * 240) {
								ctx.putImageData(img, 0, 0);
								pos = 0;
							}
						};
						
						$("#webcam").webcam({
							width: 320,
							height: 240,
							mode: "callback",
							swffile: "jscam_canvas_only.swf",
							onTick: function() {},
							onSave: saveCB,
							onCapture: function() {
								webcam.save();
							},
							quality: 50,
							debug: function() {},
							onLoad: function() {}
						});
						
						$('#captureImage').button({icons: {
		                	primary: "ui-icon-zoomin"},
		            	}).click(function(e) {
		            		//reset position
		            		webcam.capture();
		            		e.preventDefault();
		            	});
						e.preventDefault();
					});
				
					$('#editClientImage').button(
						{icons: {
	                	primary: "ui-icon-zoomin"},
	                	text: false
	            	}).click(function(e) {
						var getUrl = '';
						var putUrl = 'clients/' + clientId + '/images';
						var templateSelector = "#clientImageUploadFormTemplate";
						var width = 600; 
						var height = 250;
						
						var saveSuccessFunction = function(data, textStatus, jqXHR) {
						  $("#dialog-form").dialog("close");
						  executeAjaxRequestForImageDownload('clients/' + clientId + '/images', 'GET', imageFetchSuccessFunction, errorFunction);
						};
						
						popupDialogWithFormView(getUrl, putUrl, 'PUT', "dialog.title.edit.client.image", templateSelector, width, height,  saveSuccessFunction);
					    e.preventDefault();
					});
					//delete client image
					$('#deleteClientImage').button({icons: {
	                	primary: "ui-icon-trash"},
	                	text: false
	            	}).click(function(e) {
					var url = 'clients/' + clientId + '/images';
					var width = 400; 
					var height = 225;
					var saveSuccessFunction = function(data, textStatus, jqXHR) {
							$("#dialog-form").dialog("close");
						  	$("#customerImage").attr("src","resources/img/client-image-placeholder.png");
					};
											
					popupConfirmationDialogAndPost(url, 'DELETE', 'dialog.title.confirmation.required', width, height, 0, saveSuccessFunction);
					
					e.preventDefault();
					});

	        };
	    
		executeAjaxRequest(clientUrl, 'GET', "", successFunction, errorFunction);
}

function refreshClientIdentifiers(clientUrl) {
		var successFunction =  function(data, textStatus, jqXHR) {
			var crudObject = new Object();
			crudObject.crudRows = data;
			var tableHtml = $("#clientIdentifiersTemplate").render(crudObject);
			$("#clientidentifiertab").html(tableHtml);
			//initialize all edit/delete buttons
				
			var editClientIdentifierSuccessFunction = function(data, textStatus, jqXHR) {
			  	$("#dialog-form").dialog("close");
			  	refreshClientIdentifiers(clientUrl);
			}
			$.each(crudObject.crudRows, function(i, val) {
			      $("#editclientidentifier" + val.id).button({icons: {
	                primary: "ui-icon-pencil"}}
	                ).click(function(e){
			      	var clientId = clientUrl.replace("clients/", "");
					var getUrl = clientUrl + '/identifiers/'+val.id+'?template=true';
					var putUrl = clientUrl + '/identifiers/'+val.id;
					var templateSelector = "#clientIdentifiersFormTemplate";
					var width = 600; 
					var height = 450;
					popupDialogWithFormView(getUrl, putUrl, 'PUT', "dialog.title.clientIdentifier.edit", templateSelector, width, height,  editClientIdentifierSuccessFunction);
				    e.preventDefault();
			      });
			     $("#deleteclientidentifier" + val.id).button({icons: {
	                primary: "ui-icon-circle-close"}
	            	}).click(function(e) {
					var url = clientUrl + '/identifiers/'+val.id;
					var width = 400; 
					var height = 225;
											
					popupConfirmationDialogAndPost(url, 'DELETE', 'dialog.title.confirmation.required', width, height, 0, editClientIdentifierSuccessFunction);
					
					e.preventDefault();
				});
				//button for add document
			   $("#addclientIdentifierdocument" + val.id).button({icons: {
                primary: "ui-icon-circle-plus"}
                }).click(function(e){
		      	var getUrl = "";
				var putUrl = "client_identifiers/"+ val.id+ '/documents';
				var templateSelector = "#clientIdentifierDocumentsFormTemplate";
				var width = 600; 
				var height = 300;
				
				var saveSuccessFunction = function(data, textStatus, jqXHR) {
				  	$("#dialog-form").dialog("close");
				  	refreshClientIdentifierDocuments(val.id);
				}
				
				popupDialogWithFormView(getUrl, putUrl, 'POST', "dialog.title.clientIdentifier.add.document", templateSelector, width, height,  saveSuccessFunction);
			    e.preventDefault();
		      });
		      //fetch the identifier documents for this identifier
		      refreshClientIdentifierDocuments(val.id);
			});			
			//associate event with add client Identity button
			$('#addclientidentifier').button({icons: {
	                primary: "ui-icon-plusthick"}
	            	}).click(function(e) {
				var clientId = clientUrl.replace("clients/", "");
				
				var getUrl = clientUrl + '/identifiers/template';
				var putUrl = clientUrl + '/identifiers';
				var templateSelector = "#clientIdentifiersFormTemplate";
				var width = 600; 
				var height = 450;
				
				var saveSuccessFunction = function(data, textStatus, jqXHR) {
				  	$("#dialog-form").dialog("close");
				  	refreshClientIdentifiers(clientUrl);
				}
				
				popupDialogWithFormView(getUrl, putUrl, 'POST', "dialog.title.clientIdentifier.add", templateSelector, width, height,  saveSuccessFunction);
			    e.preventDefault();
			});
		};
  		executeAjaxRequest(clientUrl + '/identifiers', 'GET', "", successFunction, formErrorFunction);	  	
}


function refreshTransactionHistoryDetails(clientUrl)
{
	var clientId = clientUrl.replace("clients/", "");
      var getUri="transactionhistory/template/"+clientId;

		var successFunction =  function(data, textStatus, jqXHR) {
	
		var crudObject = new Object();
			crudObject.crudRows = data;
			var html = $("#transactionhistoryListTemplate").render(crudObject);
			$("#clienttransactionhistorytab").html(html);  
			
			var oTable = displayListTable("transactionhistorystable");
			oTable.fnFilter('');
		};
  		
  		executeAjaxRequest(getUri, 'GET', "", successFunction, formErrorFunction);	  
}


function refreshClientIdentifierDocuments(clientIdentifierId) {
		var successFunction =  function(data, textStatus, jqXHR) {
			var crudObject = new Object();
			crudObject.crudRows = data;
			crudObject.clientIdentifierId	= clientIdentifierId;
			var tableHtml = $("#clientIdentifierDocumentsTemplate").render(crudObject);
			$("#clientidentifier"+clientIdentifierId+"documents").html(tableHtml);
			//initialize all edit/delete buttons
			var clientIdentifierUrl = "client_identifiers/"+ clientIdentifierId;
			var editClientIdentifierDocumentSuccessFunction = function(data, textStatus, jqXHR) {
			  	$("#dialog-form").dialog("close");
			  	refreshClientIdentifierDocuments(clientIdentifierId);
			}
			$.each(crudObject.crudRows, function(i, val) {
			      $("#editclientIdentifierdocument" + val.id).button({icons: {
	                primary: "ui-icon-pencil"},
	                text: false
	                }).click(function(e){
					var getUrl = clientIdentifierUrl + '/documents/'+val.id;
					var putUrl = clientIdentifierUrl + '/documents/'+val.id;
					var templateSelector = "#editClientIdentifierDocumentsFormTemplate";
					var width = 600; 
					var height = 300;
					popupDialogWithFormView(getUrl, putUrl, 'PUT', "dialog.title.clientIdentifier.edit.document", templateSelector, width, height,  editClientIdentifierDocumentSuccessFunction);
				    e.preventDefault();
			      });
			      $("#deleteclientIdentifierdocument" + val.id).button({icons: {
	                primary: "ui-icon-trash"},
	                text: false
	            	}).click(function(e) {
					var url = clientIdentifierUrl + '/documents/'+val.id;
					var width = 400; 
					var height = 225;
											
					popupConfirmationDialogAndPost(url, 'DELETE', 'dialog.title.confirmation.required', width, height, 0, editClientIdentifierDocumentSuccessFunction);
					
					e.preventDefault();
				});
				$("#downloadclientIdentifierdocument" + val.id).button({icons: {
	                primary: "ui-icon-arrowthickstop-1-s"},
	                text: false
	            	}).click(function(e) {
					var url = clientIdentifierUrl + '/documents/'+val.id + '/attachment';
					executeAjaxOctetStreamDownloadRequest(url);
					e.preventDefault();
				});
			});			
		}
  		executeAjaxRequest("client_identifiers/"+ clientIdentifierId + '/documents', 'GET', "", successFunction, formErrorFunction);	 
}

function refreshClientDocuments(clientUrl) {
		var successFunction =  function(data, textStatus, jqXHR) {
			var crudObject = new Object();
			crudObject.crudRows = data;
			var tableHtml = $("#clientDocumentsTemplate").render(crudObject);
			$("#clientdocumenttab").html(tableHtml);
			//initialize all edit/delete buttons
				
			var editClientDocumentSuccessFunction = function(data, textStatus, jqXHR) {
			  	$("#dialog-form").dialog("close");
			  	refreshClientDocuments(clientUrl);
			}
			$.each(crudObject.crudRows, function(i, val) {
			      $("#editclientdocument" + val.id).button({icons: {
	                primary: "ui-icon-pencil"}}
	                ).click(function(e){
			      	var clientId = clientUrl.replace("clients/", "");
					var getUrl = clientUrl + '/documents/'+val.id;
					var putUrl = clientUrl + '/documents/'+val.id;
					var templateSelector = "#editClientDocumentsFormTemplate";
					var width = 600; 
					var height = 450;
					popupDialogWithFormView(getUrl, putUrl, 'PUT', "dialog.title.client.document.edit", templateSelector, width, height,  editClientDocumentSuccessFunction);
				    e.preventDefault();
			      });
			      $("#deleteclientdocument" + val.id).button({icons: {
	                primary: "ui-icon-circle-close"}
	            	}).click(function(e) {
					var url = clientUrl + '/documents/'+val.id;
					var width = 400; 
					var height = 225;
											
					popupConfirmationDialogAndPost(url, 'DELETE', 'dialog.title.confirmation.required', width, height, 0, editClientDocumentSuccessFunction);
					
					e.preventDefault();
				});
				$("#downloadclientdocument" + val.id).button({icons: {
	                primary: "ui-icon-arrowthickstop-1-s"}
	            	}).click(function(e) {
					var url = clientUrl + '/documents/'+val.id + '/attachment';
					executeAjaxOctetStreamDownloadRequest(url);
					e.preventDefault();
				});
			});			
			//associate event with add client document button
			$('#addclientdocument').button({icons: {
	                primary: "ui-icon-plusthick"}
	            	}).click(function(e) {
				var clientId = clientUrl.replace("clients/", "");
				
				var getUrl = "";
				var putUrl = clientUrl + '/documents';
				var templateSelector = "#clientDocumentsFormTemplate";
				var width = 600; 
				var height = 450;
				
				var saveSuccessFunction = function(data, textStatus, jqXHR) {
				  	$("#dialog-form").dialog("close");
				  	refreshClientDocuments(clientUrl);
				}
				
				popupDialogWithFormView(getUrl, putUrl, 'POST', "dialog.title.client.document.add", templateSelector, width, height,  saveSuccessFunction);
			    e.preventDefault();
			});
		}
  		executeAjaxRequest(clientUrl + '/documents', 'GET', "", successFunction, formErrorFunction);	  	
}
	
function refreshClientOrders(clientUrl) {
	var clientId = clientUrl.replace("clients/", "");
	      var getUri="orders/"+clientId+"/orders";

			var successFunction =  function(data, textStatus, jqXHR) {
		 
				
				var crudObject = new Object();
				crudObject.crudRows = data.clientOrders;
				var html = $("#orderFormListTemplate").render(data);
				$("#clientorderstab").html(html);  
				
				var oTable = displayListTable("orderstable");
				
				 $('#update').attr("disabled", true);
				 $('#cancelOrder').attr("disabled", true);
				 $('#reconnectOrder').attr("disabled", true);
				 $('#renewalOrder').attr("disabled", true);
				 $('#disconnectOrder').attr("disabled", true);
				 $('#topup').attr("disabled", true);
				
				
				$.each(crudObject.crudRows, function(i, val) {
				     
				 	
				     $("#orderdetails" + val.id).click( function(e) {
							var entityId = val.id;
	                        
		        			var getUrl ="order" + "s/" + entityId+"/orderprice/"+clientId;
		        			var postUrl="order" + "s/orderprice";
		        			var width = 400; 
		        			var height = 150;
		        			
		        			var formErrorFunction = function(jqXHR, textStatus, errorThrown) {
		        				handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
		        			}
		        			var saveSuccessFunction = function(data, textStatus, jqXHR) {
		        			  	$("#dialog-form").dialog("close");
		        			//  	var html = $("#orderPriceFormListTemplate").render(crudObject);
							//	var oTable = displayListTable("invoicestable");
		        			 
		        			  	
		        			  	refreshClientOrders(clientUrl);
		        			  	
		        			  	
		        			};
		        			popupDialogWithFormView(getUrl,postUrl, 'PUT', "Order Details", "#orderDetailsFormListTemplate", 1000,300,saveSuccessFunction);
		        			
						});
				    
				     
				     $("#selectedorder"+ val.id).click(function(e) {
		            		var entityId =val.id;
		                     
			            	
				        	  if(val.flag )
				            	{	
				        		 
				        		  if(val.status == val.cancelledStatus){
					    			 	
					    			 	 $('#update').attr("disabled", true);
						   				    $('#cancelOrder').attr("disabled", true);	
						   				    $('#reconnectOrder').removeAttr("disabled");	
						   				     $('#renewalOrder').attr("disabled", true);
						   				    $('#disconnectOrder').attr("disabled", true);
						   				   $('#topup').attr("disabled", true);
					    				
					            		
					            	}else{
				        			
				    			 	 $('#update').removeAttr("disabled");	
				    			 	
				   				    $('#disconnectOrder').removeAttr("disabled");	
				   				    $('#reconnectOrder').attr("disabled", true);
				   				     $('#renewalOrder').attr("disabled", true);
				   				  //  $('#disconnectOrder').attr("disabled", true);
				   				   $('#topup').attr("disabled", true);
				  	        
				        	 
				            	}
				            	}else if(val.status == val.cancelledStatus){
				            		
				            		
				    			 	
				    			 	 $('#update').attr("disabled", true);
					    			 
					   				    $('#cancelOrder').attr("disabled", true);	
					   				    $('#reconnectOrder').removeAttr("disabled");	
					   				     $('#renewalOrder').attr("disabled", true);
					   				    $('#disconnectOrder').attr("disabled", true);
					   				   $('#topup').attr("disabled", true);
				    				
				            		
				            	}else if(val.status =="DISCONNECTION PENDING"){

				            	
				    			 	
				    			 	 $('#update').removeAttr("disabled");
					    			 
					   				    $('#cancelOrder').attr("disabled", true);
					   				    $('#reconnectOrder').attr("disabled", true);	
					   				     $('#renewalOrder').attr("disabled", true);
					   				    $('#disconnectOrder').attr("disabled", true);
					   				   $('#topup').attr("disabled", true);
				    				
				            		
				            	}else if(val.isPrepaid == "Y"){
				        		  
				            		
				            	
				            		
				            		 $('#update').removeAttr("disabled");
					    			 	
					   				    $('#cancelOrder').attr("disabled", true);
					   				    $('#reconnectOrder').attr("disabled", true);	
					   				     $('#renewalOrder').attr("disabled", true);
					   				    $('#disconnectOrder').removeAttr("disabled");
					   				   $('#topup').removeAttr("disabled");
				    				
				        		  
				        		  
				        	  }else  if(val.contractPeriod != "Perceptual"){
				        		  
				    				 $('#update').removeAttr("disabled");
					   				    $('#cancelOrder').attr("disabled", true);
					   				    $('#reconnectOrder').attr("disabled", true);	
					   				     $('#renewalOrder').removeAttr("disabled");
					   				    $('#disconnectOrder').removeAttr("disabled");
					   				   $('#topup').attr("disabled", true);
				    				
					        		 
					        		
					        	  } else{
					        		  
					        		 
					    			 	
					    			 	
					    			 	 $('#update').removeAttr("disabled");
						    			 
						   				    $('#cancelOrder').attr("disabled", true);
						   				    $('#reconnectOrder').attr("disabled", true);	
						   				     $('#renewalOrder').attr("disabled", true);	
						   				    $('#disconnectOrder').removeAttr("disabled");
						   				   $('#topup').attr("disabled", true);
					    				
					        		
					        		  
					        	  }
				        			
							});
				     
				});
				
				
			}
	  		
	  		executeAjaxRequest(getUri, 'GET', "", successFunction, formErrorFunction);	  
	  		
	}

function refreshClientbillstatments(clientUrl) {
	var clientId = clientUrl.replace("clients/", "");
	      var getUri="billmaster/"+clientId;

			var successFunction =  function(data, textStatus, jqXHR) {
				
		 
				
				var crudObject = new Object();
				crudObject.crudRows = data;
				var html = $("#billStatmentFormListTemplate").render(crudObject);
				$("#clientbillstatementtab").html(html);  
				
				
				
				var oTable = displayListTable("billstable");
		
				
					
				var editClientIdentifierSuccessFunction = function(data, textStatus, jqXHR) {
				  	$("#dialog-form").dialog("close");
				  	refreshClientOrders(clientUrl);
				}
				$.each(crudObject.crudRows, function(i, val) {
					
				     
				     $("#printpdf" + val.id).click(function(e) {
		            		var entityId =this.id;
		            	
		            		var id=entityId.replace("printpdf","");
		            	
		            		var getUrl = 'billmaster/' + id + '/print';
		        			executeAjaxOctetStreamDownloadRequest(getUrl);
							
							e.preventDefault();
					});
				 	//$('button.printpdf span').text(doI18N('label.print.invoice.details'));
				     
				});
			}
	  		
	  		executeAjaxRequest(getUri, 'GET', "", successFunction, formErrorFunction);	  
	  		
	}


function refreshClientTransacton(clientUrl) {
	var clientId = clientUrl.replace("clients/", "");
	      var getUri="financialTransactions/"+clientId;
	
			var successFunction =  function(data, textStatus, jqXHR) {
				
				var crudObject = new Object();
				crudObject.crudRows = data;
				var html = $("#transactionFormListTemplate").render(crudObject);
				$("#clienttransactiontab").html(html);  
				var oTable = displayListTable("financialTransactionstable");
				//initialize all edit/delete buttons
		
				$(".invoicedetails").click( function(e) {
					var linkId = this.id;
					var entityId = linkId.replace("invoicedetails", "");
			        var geturl="financialTransactions/"+entityId+"/invoice";
					var saveSuccessFunction = function(data, textStatus, jqXHR) {
					
					  	$("#dialog-form").dialog("close");
					};
					
					popupDialogWithFormView(geturl, "", 'PUT', "Invoice Details", "#invoceDetailsFormTemplate", 1000,300,saveSuccessFunction);
				  
				});
				
			}
	  		executeAjaxRequest(getUri, 'GET', "", successFunction, formErrorFunction);	  
	}

function refreshClientOneTimeSaleDetails(clientUrl)
{
	
	var clientId = clientUrl.replace("clients/", "");
      var getUri="onetimesales/"+clientId;
      clientIdForOneTimesale = clientId;
		var successFunction =  function(data, textStatus, jqXHR) {
	
		var crudObject = new Object();
			crudObject.crudRows = data;
		
			var html = $("#oneTimeSaleListTemplate").render(data);
			$("#clientsaletab").html(html);  
		
		 
			
			var oTable = displayListTable("onetimelisttable");
			//oTable.fnFilter('');
		
			
			var oTable = displayListTable("eventorderdetails");
				
			var editClientIdentifierSuccessFunction = function(data, textStatus, jqXHR) {
			  	$("#dialog-form").dialog("close");
			  	refreshClientOneTimeSaleDetails(clientUrl);
			}
			
			/*BEGINING OF ALLOCATE-HARDWARE CODE*/
			
			var myData = JSON.stringify(crudObject);
			
			$.each(crudObject.crudRows, function(i, val) {
				
				
				 $(".allocationdetails" + val.id).click( function(e) {
						var entityId = val.id;
	   			var getUrl ="onetimesale" + "s/" + entityId+"/allocation";
	   			var width = 400; 
	   			var height = 150;
	   			var formErrorFunction = function(jqXHR, textStatus, errorThrown) {
	   				handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
	   			}
	   			var saveSuccessFunction = function(data, textStatus, jqXHR) {
	   			  //	$("#dialog-form").dialog("close");
					var oTable = displayListTable("allocationdetailstable");
	   			};
	   			popupDialogWithFormView(getUrl,"", 'GET', "Allocation Details", "#allocationDetailsFormListTemplate", 1000,300,saveSuccessFunction);
					});
			});
			
			var iv = 0;
			for(;iv<data.oneTimeSaleData.length;iv++){
			$("#allocateHardware"+data.oneTimeSaleData[iv].id).click(function(e){
				
				var idData1 = this.id;
				
				
				var oneTimeSaleId = idData1.replace("allocateHardware","");
				
				oneTimeSaleIdForOrderId = oneTimeSaleId;
				var getUrl='itemdetails/'+oneTimeSaleId;
				var postUrl='itemdetails/allocation';
				var templateSelector = "#allocateHardwareFormListTemplate";
				var width = 450; 
				var height = 400;
				var saveSuccessFunction = function(data, textStatus, jqXHR) {
					
					$("#dialog-form").dialog("close");
					refreshClientOneTimeSaleDetails(clientUrl);
					//showILClient(clientId);
				
				};
				popupDialogWithFormView(getUrl,postUrl, 'POST', "Serial Number Allocation", templateSelector, width, height,saveSuccessFunction);
				e.preventDefault();
					
					
				
			});//end of click function
$("#allocationdetails"+data.oneTimeSaleData[iv].id).click(function(e){
	
	var idData1 = this.id;
	
	
	var oneTimeSaleId = idData1.replace("allocationdetails","");
	var entityId = oneTimeSaleId;
		var getUrl ="onetimesale" + "s/" + entityId+"/allocation";
		var width = 400; 
		var height = 150;
		var formErrorFunction = function(jqXHR, textStatus, errorThrown) {
			handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
		}
		var saveSuccessFunction = function(data, textStatus, jqXHR) {
		  //	$("#dialog-form").dialog("close");
		var oTable = displayListTable("allocationdetailstable");
		};
		popupDialogWithFormView(getUrl,"", 'GET', "Allocation Details", "#allocationDetailsFormListTemplate", 1000,300,saveSuccessFunction);
		});//end of click function
			
		}//end of for loop
			
			
			
			
			$(".newadditem").click( function(e) {

				var getUrl='onetimesales/template';
		  var postUrl='onetimesales/'+clientId;
			var templateSelector = "#oneTimeSaleFormTemplate";
			var width = 700; 
			var height = 300;
			var saveSuccessFunction = function(data, textStatus, jqXHR) {
				$("#dialog-form").dialog("close");
				refreshClientOneTimeSaleDetails(clientUrl);
			//	showILClient(clientId);
				

			};//end of saveSuccessFunction
			popupDialogWithFormView(getUrl,postUrl, 'POST', "One Time Sale", templateSelector, width, height,saveSuccessFunction);
			e.preventDefault();
			
			});//end of click 
			
			 
			
			
		}//end of successunction
  		
  		executeAjaxRequest(getUri, 'GET', "", successFunction, formErrorFunction);	  
}
function refreshClientTicketDetails(clientUrl)
{
	
	var clientId = clientUrl.replace("clients/", "");
      var getUri="tickets/"+clientId;

		var successFunction =  function(data, textStatus, jqXHR) {
	
		var crudObject = new Object();
			crudObject.crudRows = data;
			var html = $("#ticketFormListTemplate").render(crudObject);
			$("#clienttickettab").html(html);  
			
			var oTable = displayListTable("ticketstable");
			oTable.fnFilter('');
				
			var editClientIdentifierSuccessFunction = function(data, textStatus, jqXHR) {
			  	$("#dialog-form").dialog("close");
			  	refreshClientOrders(clientUrl);
			}
			$.each(crudObject.crudRows, function(i, val) {
			     
				 $("#editticket" + val.id).click(function(e) {
		            		
		            	
		            		var entityId =val.id;
		            		var geturl="tickets/"+clientId+"/update/"+entityId;
		            		var putUrl = clientUrl + '/documents/'+val.id+'/attachment';
		            		
		        			
		        			var width = 670; 
		        			var height = 350;
		        			
		        			var formErrorFunction = function(jqXHR, textStatus, errorThrown) {
		        				handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
		        			}
		        			var saveSuccessFunction = function(data, textStatus, jqXHR) {
		        			  	$("#dialog-form").dialog("close");
		        			  	refreshClientTicketDetails(clientUrl);
		        			};
		        			popupDialogWithFormView(geturl, putUrl, 'POST', "Edit Ticket", "#ticketDetailFormTemplate", width,height,saveSuccessFunction);
					});
				 
				 $("#historyticket" + val.id).click(function(e) {
		            		var entityId =val.id;
		            		var geturl="tickets/"+entityId+"/history";
		            		var width = 800; 
		        			var height = 350;
		            		var saveSuccessFunction =  function(data, textStatus, jqXHR) {
		            			var crudObject = new Object();
		            				crudObject.crudRows = data;
		            				var html = $("#ticketclosedFormTemplate").render(crudObject);
		            		}
         				popupDialogWithFormView(geturl, "", 'GET', "History", "#tickethistoryFormTemplate", width,height,saveSuccessFunction);
					});

				 $("#closeticket" + val.id).click(function(e) {
         	      
		            		var entityId =val.id;
		            		var getUrl ='tickets/template';
		            		var resourceUrl ='tickets/'+entityId ;
		        			var width = 670; 
		        			var height = 350;
		        			var formErrorFunction = function(jqXHR, textStatus, errorThrown) {
		        				handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
		        			}
		        			var saveSuccessFunction = function(data, textStatus, jqXHR) {
		        			  	$("#dialog-form").dialog("close");
		        			  	refreshClientTicketDetails(clientUrl);
		        			};
		        			popupDialogWithFormView(getUrl, resourceUrl, 'PUT', "Close Ticket", "#ticketclosedFormTemplate", width,height,saveSuccessFunction);
		            		
					});
			});
		}
  		
  		executeAjaxRequest(getUri, 'GET', "", successFunction, formErrorFunction);	  
}
function refreshUploadDetails(clientUrl) {
	var successFunction =  function(data, textStatus, jqXHR) {
		var crudObject = new Object();
		crudObject.crudRows = data;
		var tableHtml = $("#uploadXlsTemplate").render(crudObject);
		$("#clientuploadtab").html(tableHtml);
		//initialize all edit/delete buttons

		//associate event with add client document button
		$('#addxlsfile').button({icons: {
                primary: "ui-icon-plusthick"}
            	}).click(function(e) {
            	
			var clientId = clientUrl.replace("clients/", "");
			
			var getUrl = "";
			var putUrl = 'uploadstatus/documents';
			var templateSelector = "#uploadxlsFileFormTemplate";
			var width = 1000; 
			var height = 450;
			
			var saveSuccessFunction = function(data, textStatus, jqXHR) {
			  	$("#dialog-form").dialog("close");
			  	showILClient(clientId);
			  	refreshClientDocuments(clientUrl);
			}
			
			popupDialogWithFormView(getUrl, putUrl, 'POST', "dialog.title.client.document.add", templateSelector, width, height,  saveSuccessFunction);
		    e.preventDefault();
		});
	}
	
		executeAjaxRequest( 'uploadstatus', 'GET', "", successFunction, formErrorFunction);	  	
}


function refreshClientUploadStatus(divName) {
	//var clientId = clientUrl.replace("clients/", "");
	      var getUri="uploadstatus/getData";
			var successFunction =  function(data, textStatus, jqXHR) {
				var crudObject = new Object();
				crudObject.crudRows = data;
				var htmlvar = $("#uploadStatusFormListTemplate").render(crudObject);
				//$("#clientuploadstatustab").html(html);  
				
				/*var editClientIdentifierSuccessFunction = function(data, textStatus, jqXHR) {
				  	$("#dialog-form").dialog("close");
				  	refreshClientUploadStatus(clientUrl);
				}*/
				$("#" + divName).html(htmlvar);
				var oTable = displayListTable("uploadstatustable");
				$('#addxlsfile').button({icons: {
	                primary: "ui-icon-plusthick"}
	            	}).click(function(e) {
	            	
			//	var clientId = clientUrl.replace("clients/", "");
				
				var getUrl = "";
				var putUrl = 'uploadstatus/documents';
				var templateSelector = "#uploadxlsFileFormTemplate";
				var width = 900; 
				var height = 450;
				
				var saveSuccessFunction = function(data, textStatus, jqXHR) {
				  	$("#dialog-form").dialog("close");
				  //	showILClient(clientId);
				  	refreshClientUploadStatus(divName);
				}
				
				popupDialogWithFormView(getUrl, putUrl, 'POST', "dialog.title.xls.document.add", templateSelector, width, height,  saveSuccessFunction);
			    e.preventDefault();
			});
				
				
				
				$.each(crudObject.crudRows, function(i, val) {
				     
					
					
				     $("#uploadStatusUpdate" + val.id).click(function(e) {
		            		var entityId =val.id;
                            var htmlvar="Processing..."
                        	$("#status"+entityId).html(htmlvar);
		        			
		        			var postUrl="uploadstatus/"+entityId;
		        			var width = 400; 
		        			var height = 150;
		        			
		        			var formErrorFunction = function(jqXHR, textStatus, errorThrown) {
		        				handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
		        			}
		        			var saveSuccessFunction = function(data, textStatus, jqXHR) {
		        			  	$("#dialog-form").dialog("close");
		        			 
		        			  	
		        			  	
		        			  	refreshClientUploadStatus(divName);
		        			  	
		        			  	
		        			};
		        			//popupDialogWithFormView(postUrl,postUrl, 'PUT', "Price Details", "#uploadStatusFormListTemplate", 1000,300,saveSuccessFunction);
		        			executeAjaxRequest(postUrl, 'PUT', "", saveSuccessFunction, formErrorFunction);
					});
				     
				 	
				    
				     
				     
				     
				});
			}
	  		
	  		executeAjaxRequest(getUri, 'GET', "", successFunction, formErrorFunction);	  
	  		
	}
function refreshInventoryItemDetails(divName){  
	
	var getUri='itemdetails/';//clientId
	var successFunction =  function(data, textStatus, jqXHR) {
	var crudObject = new Object();
			crudObject.crudRows = data;
		
			var htmlvar = $("#inventoryItemListTemplate").render(crudObject);
			$("#itemdetails-tab").html(htmlvar);  
		
		
		//	$("#" + divName).html(htmlvar);
		    displayListTable("inventorylisttable");
			//oTable.fnFilter('');
			
			$(".newinventoryadditem").click( function(e) {
				
		var getUrl='itemdetails/template?grnId=';
		  var postUrl='itemdetails';//+clientId;
			var templateSelector = "#inventoryItemFormTemplate";
			
			var width = 720; 
			var height = 350;
			
			
		var saveSuccessFunction = function(data, textStatus, jqXHR) {
				
				//$("#dialog-form").dialog("close");
				var id = $("#dialog-form #id").val();
				getUri='itemdetails/template?grnId='+id;
				var officeIdSelectSuccess = function(loanReassignmentData, textStatus, jqXHR){
					repopulateOpenPopupDialogWithFormViewData(loanReassignmentData, postUrl, 'GET', 'Inventory(Grn&ItemDetails)', '#inventoryItemFormTemplate', 700, 420, saveSuccessFunction)
				}
				executeAjaxRequest(getUri, "GET", "", officeIdSelectSuccess, formErrorFunction);
				refreshInventoryItemDetails(divName);
			};
			popupDialogWithFormView(getUrl, postUrl, 'POST', "Add Item Details", templateSelector, width, height,saveSuccessFunction);
			e.preventDefault();
			});
			
			
				}

  		executeAjaxRequest(getUri, 'GET', "", successFunction, formErrorFunction);}




function refreshInventoryGrn(){

	//var clientId = clientUrl.replace("clients/", "");
    var getUri='itemdetails/grn';//clientId

	
	var successFunction =  function(data, textStatus, jqXHR) {
	
		var crudObject = new Object();
			crudObject.crudRows = data;
		
			var htmlvar = $("#inventoryGrnListTemplate").render(crudObject);
			$("#grn-tab").html(htmlvar);  
		
			//$("#" + divName).html(htmlvar);
			//var oTable = displayListTable("uploadstatustable");
			
			var oTable = displayListTable("grnlisttable");
			oTable.fnFilter('');
				
			var editClientIdentifierSuccessFunction = function(data, textStatus, jqXHR) {
			  	$("#dialog-form").dialog("close");
			  	refreshInventoryGrnDetails(clientUrl);
			}
			$(".newgrnadditem").click( function(e) {
			
		var getUrl='itemdetails/addgrn';
		  var postUrl='itemdetails/addgrn';//+clientId;
			var templateSelector = "#inventoryGrnFormTemplate";
			
			var width = 700; 
			var height = 420;
			
			
			var saveSuccessFunction = function(data, textStatus, jqXHR) {
				$("#dialog-form").dialog("close");
				refreshInventoryGrn();
			};
			
			popupDialogWithFormView(getUrl,postUrl, 'POST', "Add Grn", templateSelector, width, height,saveSuccessFunction);
			
			e.preventDefault();
			
			});
			
			
				}

  		executeAjaxRequest(getUri, 'GET', "", successFunction, formErrorFunction);	  
}



function refreshInventoryGrn1(data){

	//var clientId = clientUrl.replace("clients/", "");
    var getUri='items';//clientId

	
	//var successFunction =  function(data, textStatus, jqXHR) {
	
		var crudObject = new Object();
			crudObject.crudRows = data;
		
			var htmlvar = $("#itemListTemplate").render(crudObject);
			$("#items-tab").html(htmlvar);  
		
			//$("#" + divName).html(htmlvar);
			//var oTable = displayListTable("uploadstatustable");
			
			var oTable = displayListTable("itemstable");
			oTable.fnFilter('');
				
			var editClientIdentifierSuccessFunction = function(data, textStatus, jqXHR) {
			  	$("#dialog-form").dialog("close");
			  	setInventoryContent('content');
			}
			$(".newadditem").click( function(e) {
			
		var getUrl='items/template';
		  var postUrl='items';//+clientId;
			var templateSelector = "#itemFormTemplate";
			
			var width = 700; 
			var height = 420;
			
			
			var saveSuccessFunction = function(data, textStatus, jqXHR) {
				$("#dialog-form").dialog("close");
				setInventoryContent('content');
			};
			
			popupDialogWithFormView(getUrl,postUrl, 'POST', "Add Item Master", templateSelector, width, height,saveSuccessFunction);
			
			e.preventDefault();
			
			});
			
			$(".edititem").click( function(e) {
				var linkId = this.id;
				  var entityId = linkId.replace("edititem", "");
				var getUrl='items/'+entityId;
				  var postUrl='items/'+entityId;//+clientId;
				
					var templateSelector = "#itemFormTemplate";
					
					var width = 700; 
					var height = 420;
					
					
					var saveSuccessFunction = function(data, textStatus, jqXHR) {
						$("#dialog-form").dialog("close");
						setInventoryContent('content');
					};
					
					popupDialogWithFormView(getUrl,postUrl, 'PUT', "Grn Details", templateSelector, width, height,saveSuccessFunction);
					
					e.preventDefault();
					
					});
			
			$(".deleteitem").click( function(e) {
				
			
					var linkId = this.id;
					var entityId = linkId.replace("deleteitem", "");

					var resourceUrl ="items/" + entityId;
					var width = 400; 
					var height = 150;
					var saveSuccessFunction = function(data, textStatus, jqXHR) {
					  	$("#dialog-form").dialog("close");
						setInventoryContent('content');
					};
					popupConfirmationDialogAndPost(resourceUrl, 'DELETE', 'dialog.title.confirmation.required', width, height, entityId, saveSuccessFunction);
				
				
				e.preventDefault();
			});
			

			
			
				//}

  	//	executeAjaxRequest(getUri, 'GET', "", successFunction, formErrorFunction);	  
}


function cancelOrder(id)
{
	alert("Cancle Order: "+id);
	
	var entityId =id;

	var resourceUrl ="order" + "s/" + entityId;
	var width = 400; 
	var height = 150;
	var saveSuccessFunction = function(data, textStatus, jqXHR) {
	  	$("#dialog-form").dialog("close");
	  	refreshClientOrders(clientUrl);
	};
	popupConfirmationDialogAndPost(resourceUrl, 'PUT', 'dialog.title.confirmation.required', width, height, entityId, saveSuccessFunction);
	
	}

function showGroup(groupId){
	var groupUrl = "groups/"+groupId;
	setGroupContent("content");

	$newtabs = $("#groupdatatabs").tabs({
    	select: function(event, tab) {
			if (tab.index == 0){
				if (groupDirty == true){
					refreshGroupLoanSummaryInfo(groupUrl);
					groupDirty = false;
				}
			}
		},
		"add": function( event, ui ) {
				$newtabs.tabs('select', '#' + ui.panel.id);
			}
	});

	var successFunction = function(data, status, xhr) {
		
		var currentGroupId = groupId;
		var currentTabIndex = $newtabs.tabs('option', 'selected');
    	var currentTabAnchor = $newtabs.data('tabs').anchors[currentTabIndex];
		var tableHtml = $("#groupDataTabTemplate").render(data);
		var groupDetails = $("#groupDetailsTemplate").render(data);
		var groupClients = $("#groupClientsTabTemplate").render(data);
		var groupSummary = $("#groupSummaryTabTemplate").render(data);

		groupDirty = false; //intended to refresh group if some data on its display has changed e.g. loan status or notes

		$("#groupdetails").html(groupDetails);
		$("#grouptab").html(tableHtml);
		$("#grouptabname").html("General");
		$("#groupclientstab").html(groupClients);
		$("#groupclientstabname").html("Clients");
		$("#groupsummarytab").html(groupSummary);
		$("#groupsummarytabname").html("Summary");

		refreshGroupLoanSummaryInfo(groupUrl);

        refreshNoteWidget('groups/' + currentGroupId, 'groupnotes' );
        refreshCalendarWidget(currentGroupId, 'groups', 'centerCalendarContent');
		//improper use of document.ready, correct way is send these function as call back
		$(document).ready(function() {
			
			$('.activategroup').button({icons: {primary: "ui-icon-circle-check"}}).click(function(e) {
				var linkId = this.id;
				var getUrl = 'groups/' + currentGroupId + '?command=activate&template=true';
				var postUrl = 'groups/' + currentGroupId + '?command=activate';
				var templateSelector = "#activationTemplate";
				var width = 400; 
				var height = 225;

				var saveSuccessFunction = function(data, textStatus, jqXHR) {
				  	$("#dialog-form").dialog("close");
				  	showGroup(currentGroupId);
				}
				
				popupDialogWithFormView(getUrl, postUrl, 'POST', 'dialog.title.activation', templateSelector, width, height, saveSuccessFunction);
			    e.preventDefault();
			});
			$('button.activategroup span').text(doI18N('button.activate'));
			

			$('.newgrouploanbtn').button({icons: {primary: "ui-icon-document-b"}}).click(function(e) {
				var linkId = this.id;
				var groupId = linkId.replace("newgrouploanbtn", "");
				launchGroupLoanApplicationDialog(groupId);
			    e.preventDefault();
			});

			$('.deletegroupbtn').button({icons: {primary: "ui-icon-trash"}}).click(function(e) {
				var linkId = this.id;
				var groupId = linkId.replace("deletegroupbtn", "");

				var url = 'groups/' + groupId;
				var width = 400; 
				var height = 225;
										
				popupConfirmationDialogAndPost(url, 'DELETE', 'dialog.title.confirmation.required', width, height, 0, saveSuccessFunctionReloadClientListing);
				
				e.preventDefault();
			});

			$('.addclientbtn').button().click(function(e){
				var linkId = this.id;
				var groupId = linkId.replace("addclientbtn", "");

				var officeId = data.officeId;

				addClient(officeId , groupId);
				e.preventDefault();
			});

			// bind click listeners to buttons.
			$('.editstandardgroupbtn').button({icons: {primary: "ui-icon-pencil"}}).click(function(e) {
				var linkId = this.id;
				var groupId = linkId.replace("editstandardgroupbtn", "");
				launchGroupDialog(groupId);
			    e.preventDefault();
			});
			
			$('.editcentergroupbtn').button({icons: {primary: "ui-icon-pencil"}}).click(function(e) {
				var linkId = this.id;
				var groupId = linkId.replace("editcentergroupbtn", "");
				
				launchCenterGroupDialog(groupId);
			    e.preventDefault();
			});

			$('.newbulkloanbtn').button({icons: {primary: "ui-icon-document-b"}}).click(function(e) {
				//addLJGBulkMembersLoans(groupId);
				jlgBulkMembersLoanWizard(groupId);
		    	e.preventDefault();
			});

			$('.unassignstafftogroup').button().click(function(e){

						var linkId = this.id;
						var groupId = linkId.replace("unassignstafftogroup", "");
						var staffId = $('#staffId').val();
						var postUrl = 'groups/'+ groupId +'/command/unassign_staff';
						var getUrl = ""
						
						var templateSelector = "#loanUnassignmentFormTemplate";
						var width = 400; 
						var height = 225;
						var jsonbody = '{"staffId":"'+staffId+'"}';
						
						var saveSuccessFunction = function(data, textStatus, jqXHR) {
				  			$("#dialog-form").dialog("close");
				  			showGroup(groupId);
						}						
						//popupDialogWithFormView(jsonbody, postUrl, 'POST', 'dialog.title.assign.loan.officer', templateSelector ,width, height, saveSuccessFunctionReloadLoan );
						//popupDialogWithFormViewData(jsonbody, postUrl, 'POST', 'dialog.title.unassign.loan.officer', templateSelector, width, height, saveSuccessFunction)		
						popupConfirmationDialogAndPost(postUrl, 'POST', 'dialog.title.confirmation.required', width, height, 0, saveSuccessFunction , jsonbody);

						e.preventDefault();
			});

			$('.addgroupnotebtn').button({icons: {
                         primary: "ui-icon-comment"}
            }).click(function(e) {
                var linkId = this.id;
                var groupId = linkId.replace("addgroupnotebtn", "");
                var postUrl = 'groups/' + groupId + '/notes';
                var templateSelector = "#noteFormTemplate";
                var width = 600;
                var height = 400;

                var saveSuccessFunction = function(data, textStatus, jqXHR) {
                    $("#dialog-form").dialog("close");
                    refreshNoteWidget('groups/' + groupId, 'groupnotes');
                }

                popupDialogWithFormView("", postUrl, 'POST', "dialog.title.add.note", templateSelector, width, height,  saveSuccessFunction);
                e.preventDefault();
            });

            $('.groupsavingsbtn').button({icons: {
               			 primary: "ui-icon-document-b"}
                	}).click(function(e) {
                var linkId = this.id;
                var groupId = linkId.replace("addgroupnotebtn", "");
                var postUrl = 'groups/' + groupId + '/notes';
                var templateSelector = "#noteFormTemplate";
                var width = 600;
                var height = 400;

                var saveSuccessFunction = function(data, textStatus, jqXHR) {
                    $("#dialog-form").dialog("close");
                    refreshNoteWidget('groups/' + groupId, 'groupnotes');
                }

                popupDialogWithFormView("", postUrl, 'POST', "dialog.title.add.note", templateSelector, width, height,  saveSuccessFunction);
                e.preventDefault();
            });

            $('button.addgroupnotebtn span').text(doI18N('dialog.button.add.note'));

		});

		$('.addcalendarbtn').button({icons: {primary: "ui-icon-calendar"}}).click(function(e) {
			var linkId = this.id;
            var groupId = linkId.replace("addcalendarbtn", "");
            addCalendar(groupId, 'groups', 'centerCalendarContent');
            e.preventDefault();
		});

		$('.addnewjlgloanbtn').button({icons: {primary: "ui-icon-document-b"}}).click(function(e) {
			var linkId = this.id;
            var clientId = linkId.replace("addnewjlgloanbtn", "");
            var groupId = currentGroupId;
            launchJLGLoanApplicationDialog(clientId, groupId);
            e.preventDefault();
		});
			
	
	}

	var errorFunction = function(jqXHR, textStatus, errorThrown, index, anchor) {
    	handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
        $(anchor.hash).html("error occured while ajax loading.");
    };
    
	executeAjaxRequest(groupUrl + '?associations=clientMembers', 'GET', "", successFunction, errorFunction);
}

function showCenter(centerId){
	var centerUrl = "centers/"+centerId;
	setCenterContent("content");

	$newtabs = $("#centerdatatabs").tabs({
    	select: function(event, tab) {
			if (tab.index == 0){
				if (centerDirty == true){
					refreshGroupLoanSummaryInfo(centerUrl);
					centerDirty = false;
				}
			}
		},
		"add": function( event, ui ) {
				$newtabs.tabs('select', '#' + ui.panel.id);
			}
	});

	var successFunction = function(data, status, xhr) {
		var currentGroupId = centerId;
		var currentTabIndex = $newtabs.tabs('option', 'selected');
    	var currentTabAnchor = $newtabs.data('tabs').anchors[currentTabIndex];
		var tableHtml = $("#centerDataTabTemplate").render(data);
		var centerDetailsHtml = $("#centerDetailsTemplate").render(data);
		var centerGroupsHtml = $("#centerGroupsTabTemplate").render(data);
		var centerSummaryHtml = $("#centerSummaryTabTemplate").render(data);


		centerDirty = false; //intended to refresh group if some data on its display has changed e.g. loan status or notes

		$("#centerDetails").html(centerDetailsHtml);
		$("#centertab").html(tableHtml);
		$("#centertabname").html("General");

		$("#centertabsummaryname").html("Summary");
		$("#centertabsummary").html(centerSummaryHtml);
		$("#centertabgroups").html(centerGroupsHtml);
		$("#centertabgroupsname").html("Groups");

		refreshGroupLoanSummaryInfo(centerUrl);

        refreshNoteWidget('groups/' + currentGroupId, 'groupnotes' );
        refreshCalendarWidget(currentGroupId, 'centers', 'centerCalendarContent');
		//improper use of document.ready, correct way is send these function as call back
		$(document).ready(function() {

			// bind click listeners to buttons.
			$('.activatecenter').button({icons: {primary: "ui-icon-circle-check"}}).click(function(e) {
				var linkId = this.id;
				var getUrl = 'centers/' + currentGroupId + '?command=activate&template=true';
				var postUrl = 'centers/' + currentGroupId + '?command=activate';
				var templateSelector = "#activationTemplate";
				var width = 400; 
				var height = 225;

				var saveSuccessFunction = function(data, textStatus, jqXHR) {
				  	$("#dialog-form").dialog("close");
				  	showCenter(currentGroupId);
				}
				
				popupDialogWithFormView(getUrl, postUrl, 'POST', 'dialog.title.activation', templateSelector, width, height, saveSuccessFunction);
			    e.preventDefault();
			});
			$('button.activatecenter span').text(doI18N('button.activate'));
			
			$('.editcenterbtn').button({icons: {primary: "ui-icon-pencil"}}).click(function(e) {
				var linkId = this.id;
				var centerId = linkId.replace("editcenterbtn", "");
				
				var getUrl = 'centers/' + centerId + '?template=true';
				var putUrl = 'centers/' + centerId;
				var templateSelector = "#centerFormTemplate";
				var width = 900; 
				var height = 400;
				
				var saveSuccessFunction = function(data, textStatus, jqXHR) {
				  	$("#dialog-form").dialog("close");
				  	showCenter(centerId);
				}
				
				var title = 'dialog.title.edit.center';

				var extraParam = '{"action":"disable"}';
				popupDialogWithFormView(getUrl, putUrl, 'PUT', title, templateSelector, width, height,  saveSuccessFunction , extraParam);
			    e.preventDefault();
			});

			$('.addgroupbtn').button({icons: {primary: "ui-icon-document-b"}}).click(function(e) {

				var linkId = this.id;
				var centerId = linkId.replace("addgroupbtn", "");

				var addGroupSuccessFunction = function(data, textStatus, jqXHR) {
					$('#dialog-form').dialog("close");
					showGroup(data.resourceId);
				}

				var getUrl = 'groups/template?centerId='+centerId;
				var postUrl = 'groups';
				var templateSelector = "#centerGroupFormTemplate";
				var width = 900; 
				var height = 500;
				var title = 'dialog.title.add.group';
				//var extraParam = '{"action":"disable"'  + ' , "parentGroupId":"'+ centerId +'"}';
				popupDialogWithFormView(getUrl, postUrl, 'POST', title , templateSelector, width, height, addGroupSuccessFunction);
				e.preventDefault();

			});

			$('.addcalendarbtn').button({icons: {primary: "ui-icon-calendar"}}).click(function(e) {
				var linkId = this.id;
				var centerId = linkId.replace("addcalendarbtn", "");
				addCalendar(centerId, 'centers', 'centerCalendarContent');
			    e.preventDefault();
			});

			$('.addgroupnotebtn').button({icons: {primary: "ui-icon-comment"}}).click(function(e) {
                var linkId = this.id;
                var centerId = linkId.replace("addgroupnotebtn", "");
                var postUrl = 'groups/' + centerId + '/notes';
                var templateSelector = "#noteFormTemplate";
                var width = 600;
                var height = 400;

                var saveSuccessFunction = function(data, textStatus, jqXHR) {
                    $("#dialog-form").dialog("close");
                    refreshNoteWidget('groups/' + centerId, 'groupnotes');
                }

                popupDialogWithFormView("", postUrl, 'POST', "dialog.title.add.note", templateSelector, width, height,  saveSuccessFunction);
                e.preventDefault();
            });

            $('button.addgroupnotebtn span').text(doI18N('dialog.button.add.note'));

			$('.deletecenterbtn').button({icons:{primary: "ui-icon-trash"}}).click(function(e) {
				var linkId = this.id;
				var centerId = linkId.replace("deletecenterbtn", "");

				var url = 'centers/' + centerId;
				var width = 400; 
				var height = 225;
										
				popupConfirmationDialogAndPost(url, 'DELETE', 'dialog.title.confirmation.required', width, height, 0, saveSuccessFunctionReloadClientListing);
				
				e.preventDefault();
			});

			$('.unassignstafftogroup').button().click(function(e){

						var linkId = this.id;
						var centerId = linkId.replace("unassignstafftogroup", "");
						var staffId = $('#staffId').val();
						var postUrl = 'groups/'+ centerId +'/command/unassign_staff';
						var getUrl = ""
						
						var templateSelector = "#loanUnassignmentFormTemplate";
						var width = 400; 
						var height = 225;
						var jsonbody = '{"staffId":"'+staffId+'"}';
						
						var saveSuccessFunction = function(data, textStatus, jqXHR) {
				  			$("#dialog-form").dialog("close");
				  			showCenter(centerId);
						}						
						//popupDialogWithFormView(jsonbody, postUrl, 'POST', 'dialog.title.assign.loan.officer', templateSelector ,width, height, saveSuccessFunctionReloadLoan );
						//popupDialogWithFormViewData(jsonbody, postUrl, 'POST', 'dialog.title.unassign.loan.officer', templateSelector, width, height, saveSuccessFunction)		
						popupConfirmationDialogAndPost(postUrl, 'POST', 'dialog.title.confirmation.required', width, height, 0, saveSuccessFunction , jsonbody);

						e.preventDefault();
			});

		});
		
	}

	var errorFunction = function(jqXHR, textStatus, errorThrown, index, anchor) {
    	handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
        $(anchor.hash).html("error occured while ajax loading.");
    };

	executeAjaxRequest(centerUrl + '?associations=groupMembers', 'GET', "", successFunction, errorFunction);
}

	function jlgBulkMembersLoanWizard(groupId){
		setAddBulkLoanContent("content");

		var viewMemberselection = function(data, textStatus, jqXHR) {
			var memberHtml = $("#jlgbulkloanmemberselect").render(data);

			$("#jlgloans").append(memberHtml);

			$('.multiadd').click(function() {  
				return !$('.multiNotSelectedItems option:selected').remove().appendTo('#loanMembers');  
			});
			
			$('.multiremove').click(function() {  
				return !$('.multiSelectedItems option:selected').remove().appendTo('#notSelectedClients');  
			});

			$('#continuebtn').button({icons: { primary: "ui-icon-circle-arrow-e"}}).click(function(e){
				
				//get Loan product details
				var container = $('#jlgloanproductdetails');
				var loanProductId = $('#productId').val(); 
				var membersLength = $('#loanMembers > option').length;

				if(loanProductId === undefined || membersLength === undefined || membersLength <= 0){
					return false;
				}

				$('#membesselect').hide();
				$('#jlgloancontainer').show();
				var isjlgbulk = true;
				var loanType = 'jlg';
				loadTabbedLoanApplicationForm(container, undefined, loanProductId, data.group, loanType, isjlgbulk);
				//$('#selectedmembers').html('');
				$("#selectedmembers option").remove();
				$('#selectedmembers').empty().append(function(){
	                var output = "";
	                $('#loanMembers option').each(function(i) {  
	                    output += '<option value="' + $(this).val() + '">' + $(this).text() + '</option>';
	                });
	                
	                return output;
	            });	

				$('#backbtn').button({icons: { primary: "ui-icon-circle-arrow-w"}}).click(function(e){
					$('#membesselect').show();
					$('#jlgloancontainer').hide();
				});

	            $('#savebtn').button({icons: { primary: "ui-icon-disk"}}).click(function(e){
	                var serializedArray = {};
	                serializedArray = $('#entityform').serializeObject();
	                serializedArray['productId'] = loanProductId;
	                serializedArray['groupId'] = groupId;
	                serializedArray["calendarId"] = $("#calendarId").val();
	                var isError = false;
	                var totalSelectedMembers = $('#selectedmembers > option').length;
	                $('#selectedmembers option').each(function(index) {  
	                    var serializedArray1 = serializedArray;
	                    serializedArray1['clientId'] = $(this).val();
	                    var newFormData = JSON.stringify(serializedArray);
	                    var successFunction =  function(data, textStatus, jqXHR) {
	                        if (index === totalSelectedMembers - 1) {
						        showGroup(groupId);
						    }
	                        
	                    };
	                    
	                    var customFormErrorFunction = function(jqXHR, textStatus, errorThrown) {
	                        formErrorFunction(jqXHR, textStatus, errorThrown);
	                        isError = true;
	                    };
	            		if(isError) return false;
	                    executeAjaxRequest('loans', "POST", newFormData , successFunction, customFormErrorFunction);
	                });
	            });		
			});
			
		}

		var url = 'loans/template?templateType=jlgbulk&groupId=' + groupId + '&lendingStrategy=300';
		executeAjaxRequest(url, 'GET', "", viewMemberselection, formErrorFunction);	
	}
/*
	### Not in use - delete after testing
	function addLJGBulkMembersLoans(groupId){
		setAddBulkLoanContent("content");

		var addMemberLoanApplicationSuccess = function(data, textStatus, jqXHR) {
			var memberHtml = $("#bulkLoanApplicationMemberPartial").render(data);
			$("#jlgloans").append(memberHtml);

			$('#productId').change(function() {
				var productId = $('#productId').val();
				addLJGBulkMembersLoansWithProdDetails(data.group.id , productId);
			});

		} 

		var url = 'loans/template?groupId=' + groupId + '&lendingStrategy=300';
		executeAjaxRequest(url, 'GET', "", addMemberLoanApplicationSuccess, formErrorFunction);
	}

	function addLJGBulkMembersLoansWithProdDetails(groupId , productId){

		setAddBulkLoanContent("content");

		var addMemberLoanApplicationSuccess = function(data, textStatus, jqXHR) {
			var memberHtml = $("#bulkLoanApplicationMemberPartial").render(data);
			$("#jlgloans").append(memberHtml);

			$('#productId').change(function() {
				var productId = $('#productId').val();
				addLJGBulkMembersLoansWithProdDetails(data.group.id , productId);
			});

			$('#alljlgclients:checkbox').change(function() {
				if($(this).attr("checked")) $('input:checkbox').attr('checked','checked');
			   else $('input:checkbox').removeAttr('checked');
			});


			$('.datepickerfieldnoconstraint').datepicker({constrainInput: true, defaultDate: 0, dateFormat: custom.datePickerDateFormat});

			$('#submitjlgloanapps').button().click(function(e) {
				$('.entityform').each(function(){

		    		var serializationOptions = {};
					serializationOptions["checkboxesAsBools"] = true;
					
					var memberLoanData = $(this).serializeObject(serializationOptions),
						entityForm = $(this);

	    			
		    		if(memberLoanData.jlgclient === 'true') {

		    				delete memberLoanData.jlgclient;

		    				memberLoanData.submittedOnDate = $('#submittedOnDate').val();
		    				memberLoanData.expectedDisbursementDate = $('#expectedDisbursementDate').val();
		    				memberLoanData.interestChargedFromDate = $('#interestChargedFromDate').val();
		    				memberLoanData.repaymentsStartingFromDate = $('#repaymentsStartingFromDate').val();
		    				memberLoanData.productId = $('#productId').val();

							var serializedCharges = $("#charges").serializeObject();	
							memberLoanData.charges = serializedCharges.charges;	    				

		    				var memberLoanDataString = JSON.stringify(memberLoanData);
					
							var successFunction =  function(data, textStatus, jqXHR) {
								entityForm.closest("#client" + memberLoanData.clientId).remove();
							if ($('.entityform').length === 0){
								showGroup(groupId);	
								}
							};
							
							var customFormErrorFunction = function(jqXHR, textStatus, errorThrown) {
								handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#client" + memberLoanData.clientId + " .formerrors");
							};
					
							executeAjaxRequest('loans', "POST", memberLoanDataString, successFunction, customFormErrorFunction);	

					}
				})

	    		e.preventDefault();

			});

		} 

		var url = 'loans/template?groupId=' + groupId + '&lendingStrategy=300' + '&productId=' + productId;

		executeAjaxRequest(url, 'GET', "", addMemberLoanApplicationSuccess, formErrorFunction);
	}	
*/

	// function to retrieve and display loan summary information in it placeholder
	function refreshLoanSummaryInfo(clientUrl) {
		var successFunction =  function(data, textStatus, jqXHR) {
			var tableHtml = $("#clientAccountSummariesTemplate").render(data);
			$("#clientaccountssummary").html(tableHtml);
		}
  		executeAjaxRequest(clientUrl + '/loans', 'GET', "", successFunction, formErrorFunction);	  	
	}
	function refreshBalanceSummaryInfo(clientUrl) {
		
		/*var successFunction =  function(data, textStatus, jqXHR) {
			var tableHtml = $("#clientAccountSummariesTemplate").render(data);
			$("#clientaccountssummary").html(tableHtml);
		}
		executeAjaxRequest('clientBalance/template/'+clientId, 'GET', "", successFunction, formErrorFunction);	*/  	
	}
	
	// function to retrieve and display group loan summary information in it placeholder
	function refreshGroupLoanSummaryInfo(groupUrl) {
		var successFunction =  function(data, textStatus, jqXHR) {
  			var tableHtml = $("#groupAccountSummariesTemplate").render(data);
  			$("#groupaccountssummary").html(tableHtml);

			$('.toggleMemberLoanDetails').click(function(e){
				var memberLoanDetailsElement = $(this).next(".memberLoanDetails"),
					loanId = memberLoanDetailsElement.attr("id").replace("memberLoanDetails",""),
					showMemberLoanDetailsSuccess = function(data, textStatus, jqXHR){
						var memberLoanDetailsHtml = $("#memberLoanDetailsPartialTemplate").render(data),
			        		offsetToSubmittedDate = data.convenienceData.maxSubmittedOnOffsetFromToday,
	        				offsetToApprovalDate = data.convenienceData.maxApprovedOnOffsetFromToday,
	        				offsetToDisbursalDate = data.convenienceData.maxDisbursedOnOffsetFromToday,
	        				maxOffset = 0;
						
						memberLoanDetailsElement.html(memberLoanDetailsHtml);
						memberLoanDetailsElement.show();
						
						$('.approveloan').button().click(function(e) {
							var linkId = this.id;
							var loanId = linkId.replace("approvebtn", "");
							var postUrl = 'loans/' + loanId + '?command=approve';
							var templateSelector = "#loanApplicationApprovalTemplate";
							var width = 500; 
							var height = 350;
							var defaultOffset = offsetToSubmittedDate;
							popupDialogWithPostOnlyFormView(postUrl, 'POST', 'dialog.title.approve.loan', templateSelector, width, height, reloadGroupLoanSummarySaveSuccessFunction(groupUrl),  offsetToSubmittedDate, defaultOffset, maxOffset)
						    e.preventDefault();
						});
						$('button.approveloan span').text(doI18N('dialog.button.approve.loan'));
							
						$('.undoapproveloan').button().click(function(e) {
							var linkId = this.id;
							var loanId = linkId.replace("undoapprovebtn", "");
							var postUrl = 'loans/' + loanId + '?command=undoapproval';
							var templateSelector = "#undoStateTransitionLoanFormTemplate";
							var width = 500; 
							var height = 350;
							var defaultOffset = offsetToSubmittedDate;
							popupDialogWithPostOnlyFormView(postUrl, 'POST', 'dialog.title.undo.loan.approval', templateSelector, width, height, reloadGroupLoanSummarySaveSuccessFunction(groupUrl), offsetToSubmittedDate, defaultOffset, maxOffset)
						    e.preventDefault();
						});
						$('button.undoapproveloan span').text(doI18N('dialog.button.undo.loan.approval'));
							
						$('.deleteloan').button().click(function(e) {
							var linkId = this.id;
							var loanId = linkId.replace("deletebtn", "");
							var url = 'loans/' + loanId;
							var width = 400; 
							var height = 225;
													
							popupConfirmationDialogAndPost(url, 'DELETE', 'dialog.title.confirmation.required', width, height, 0, reloadGroupLoanSummarySaveSuccessFunction(groupUrl));
						    e.preventDefault();
						});
						$('button.deleteloan span').text(doI18N('dialog.button.delete.loan'));
							
						$('.disburseloan').button().click(function(e) {
							var linkId = this.id;
							var loanId = linkId.replace("disbursebtn", "");
							var postUrl = 'loans/' + loanId + '?command=disburse';
							var templateSelector = "#loanDisbursementTemplate";
							var width = 500; 
							var height = 450;
							var defaultOffset = offsetToApprovalDate;
							popupDialogWithPostOnlyFormView(postUrl, 'POST', 'dialog.title.disburse.loan', templateSelector, width, height, reloadGroupLoanSummarySaveSuccessFunction(groupUrl),  offsetToSubmittedDate, defaultOffset, maxOffset)
						    e.preventDefault();
						});
						$('button.disburseloan span').text(doI18N('dialog.button.disburse.loan'));

						$('.undodisbursalloan').button().click(function(e) {
							var linkId = this.id;
							var loanId = linkId.replace("undodisbursalbtn", "");
							var postUrl = 'loans/' + loanId + '?command=undodisbursal';
							var templateSelector = "#undoStateTransitionLoanFormTemplate";
							var width = 500; 
							var height = 350;
							var defaultOffset = offsetToApprovalDate;
							popupDialogWithPostOnlyFormView(postUrl, 'POST', 'dialog.title.undo.loan.disbursal', templateSelector, width, height, reloadGroupLoanSummarySaveSuccessFunction(groupUrl),  offsetToSubmittedDate, defaultOffset, maxOffset)
						    e.preventDefault();
						});
						$('button.undodisbursalloan span').text(doI18N('dialog.button.undo.loan.disbursal'));
						
					};

					if (memberLoanDetailsElement.children().length > 0 ){
						memberLoanDetailsElement.toggle();
					} else {
						executeAjaxRequest('loans/' + loanId + '?associations=permissions,meeting', 'GET', "", showMemberLoanDetailsSuccess, formErrorFunction);
					}

					
					e.preventDefault();
			});
		}
  		executeAjaxRequest(groupUrl + '/loans', 'GET', "", successFunction, formErrorFunction);	  	
	}

	function reloadGroupLoanSummarySaveSuccessFunction(groupUrl){
		return function(data, textStatus, jqXHR) {
			$("#dialog-form").dialog("close");
			refreshGroupLoanSummaryInfo(groupUrl);
		};
	}

	function refreshNoteWidget(resourceUrl, notesContent) {
			  	
		//if (jQuery.MifosXUI.showTask("ViewNotes") == true)
		//{
			eval(genRefreshNoteWidgetSuccessVar(resourceUrl, notesContent));
			executeAjaxRequest(resourceUrl + '/notes', 'GET', "", successFunction, formErrorFunction);
		//}
	}
	function genRefreshNoteWidgetSuccessVar(resourceUrl, notesContent) {

		return 'var successFunction = function(data, textStatus, jqXHR) {	' +
				  ' var noteParent = new Object();' + 
				  ' noteParent.title = doI18N("widget.notes.heading");' +
				  ' noteParent.notes = data;' +
				  ' var tableHtml = $("#noteListViewTemplate").render(noteParent);' +
				  ' $("#' + notesContent + '").html(tableHtml);' +
				  ' $(".editnote").click(function(e) { ' +
						' var linkId = this.id;' +
						' var noteId = linkId.replace("editnotelink", "");' +
						' var getAndPutUrl = "' + resourceUrl + '/notes/" + noteId;' +
						' var templateSelector = "#noteFormTemplate";' +
						' var width = 600;' +
						' var height = 400;' +
						' var saveSuccessFunction = function(data, textStatus, jqXHR) {' +
						  	' $("#dialog-form").dialog("close");' +
							' refreshNoteWidget("' + resourceUrl + '", "' + notesContent + '");' +
						' };' +
						' popupDialogWithFormView(getAndPutUrl, getAndPutUrl, "PUT", "dialog.title.edit.note", templateSelector, width, height,  saveSuccessFunction);' +
					    ' e.preventDefault();' +
			      ' });' +
			  ' };'
	}
	
	function modifyLoanApplication(clientId, loanId) {
		
		var newFormData = JSON.stringify($('#entityform').serializeObject());
    	
		var successFunction =  function(data, textStatus, jqXHR) {
			showILClient(clientId);
		};
		
		executeAjaxRequest('loans/' + loanId , "PUT", newFormData, successFunction, formErrorFunction);	  
	}
	
	function submitTabbedLoanApplication(divContainer, clientId, group, loanType) {
		
		var serializationOptions = {};
		serializationOptions["checkboxesAsBools"] = true;
		
		var serializedArray = {};
		serializedArray = $('#entityform').serializeObject(serializationOptions);

		
		if(loanType === 'jlg' || loanType === 'group'){
            serializedArray["groupId"] = group.id;
            serializedArray["calendarId"] = $("#calendarId").val();
        }

		var newFormData = JSON.stringify(serializedArray);

		var successFunction =  function(data, textStatus, jqXHR) {
			divContainer.dialog("close");
			if (loanType === 'individual' || loanType === 'jlg') {
				showILClient(clientId);
			} else if(loanType === 'group'){
				showGroup(group.id);
			}
		};
		
		executeAjaxRequest('loans', "POST", newFormData, successFunction, formErrorFunction);	  
	}
	
	function submitTabbedModifyLoanApplication(divContainer, loanId, clientId, group) {
		
		var serializationOptions = {};
		serializationOptions["checkboxesAsBools"] = true;
		
		var serializedArray = {};
		serializedArray = $('#entityform').serializeObject(serializationOptions);	
		
		// deleting all charges while modifying a loan application
		// sends a request to the platform without any json element called
		// "charges". The platform does not understand that charges have been deleted
		// Sending an empty array of charges in this associative array instead
		// for handling this scenario
		if(!("charges" in serializedArray)){
		    serializedArray["charges"] = {};
		}

        //If JLG loan, send group id and calendar id
        if(!(group === undefined)){
            serializedArray["groupId"] = group.id;//This is group loan
            serializedArray["calendarId"] = $("#calendarId").val();
        }

		var newFormData = JSON.stringify(serializedArray);
		
		var successFunction =  function(data, textStatus, jqXHR) {
			divContainer.dialog("close");
			loadILLoan(loanId, "clientdatatabs");
		};
		
		executeAjaxRequest('loans/' + loanId , "PUT", newFormData, successFunction, formErrorFunction);	  
	}
	
	var launchLoanApplicationDialogOnSuccessFunction = function(loanType){
		
		return  function(data, textStatus, jqXHR) {

			var dialogDiv = $("<div id='dialog-form'></div>");
			var saveButton = doI18N('dialog.button.save');
			var cancelButton = doI18N('dialog.button.cancel');
			
			var buttonsOpts = {};
			buttonsOpts[saveButton] = function() {
				submitTabbedLoanApplication(dialogDiv, data.clientId, data.group, loanType);
			};
			// end of buttonsOpts for save button
			
			buttonsOpts[cancelButton] = function() {$(this).dialog( "close" );};
			
			dialogDiv.dialog({
			  		title: doI18N('dialog.title.newLoanApplication'), 
			  		width: 1200, 
			  		height: 575, 
			  		modal: true,
			  		buttons: buttonsOpts,
			  		close: function() {
			  			// if i dont do this, theres a problem with errors being appended to dialog view second time round
			  			$(this).remove();
					},
			  		open: function (event, ui) {
			  			if (data.loanProductId) {
			  				loadTabbedLoanApplicationForm(dialogDiv, data.clientId, data.loanProductId , data.group, loanType);
			  			} else {
			  				var formHtml = $("#loanApplicationSelectProductDialogTemplate").render(data);
			  				dialogDiv.html(formHtml);
			  			}
						
						$("#productId").change(function() {
							var loanProductId = $("#productId").val();
							loadTabbedLoanApplicationForm(dialogDiv, data.clientId, loanProductId , data.group, loanType);
						});
			  		}
			  	}).dialog('open');		
		};

	}
	
	function launchLoanApplicationDialog(clientId) {
		executeAjaxRequest('loans/template?templateType=individual&clientId=' + clientId, 'GET', "", launchLoanApplicationDialogOnSuccessFunction("individual"), formErrorFunction);
	}
	
	function launchJLGLoanApplicationDialog(clientId, groupId) {
		executeAjaxRequest('loans/template?templateType=jlg&clientId=' + clientId + '&groupId=' + groupId, 'GET', "", launchLoanApplicationDialogOnSuccessFunction("jlg"), formErrorFunction);
	}

	function launchGroupLoanApplicationDialog(groupId) {
		executeAjaxRequest('loans/template?templateType=group&groupId=' + groupId+'&lendingStrategy=300', 'GET', "", launchLoanApplicationDialogOnSuccessFunction("group"), formErrorFunction);
	}

	var launchModifyLoanApplicationDialogOnSuccessFunction = function(data, textStatus, jqXHR) {
		var dialogDiv = $("<div id='dialog-form'></div>");
		var saveButton = doI18N('dialog.button.save');
		var cancelButton = doI18N('dialog.button.cancel');
		
		var buttonsOpts = {};
		buttonsOpts[saveButton] = function() {
			submitTabbedModifyLoanApplication(dialogDiv, data.id, data.clientId, data.group);
		};
		// end of buttonsOpts for save button
		
		buttonsOpts[cancelButton] = function() {$(this).dialog( "close" );};
		
		dialogDiv.dialog({
		  		title: doI18N('dialog.title.newLoanApplication'), 
		  		width: 1200, 
		  		height: 575, 
		  		modal: true,
		  		buttons: buttonsOpts,
		  		close: function() {
		  			// if i dont do this, theres a problem with errors being appended to dialog view second time round
		  			$(this).remove();
				},
		  		open: function (event, ui) {
		  			if (data.loanProductId) {
		  				renderLoanApplicationTabs(dialogDiv, data);
		  			} else {
		  				var formHtml = $("#loanApplicationSelectProductDialogTemplate").render(data);
		  				dialogDiv.html(formHtml);
		  			}
					
					$("#productId").change(function() {
						var loanProductId = $("#productId").val();
						loadTabbedLoanApplicationForm(dialogDiv, data.clientId, loanProductId, data.loanType.value.toLowerCase());
					});
		  		}
		  	}).dialog('open');		
	};
	
	function launchModifyLoanApplicationDialog(loanId) {
		executeAjaxRequest('loans/' + loanId + '?template=true&associations=charges,collateral,meeting', 'GET', "", launchModifyLoanApplicationDialogOnSuccessFunction, formErrorFunction);
	}
	
	var renderLoanApplicationTabs = function(container, data) {
		// show full application form with values defaulted
		data.loanType = data.loanType.value.toLowerCase();
		var formHtml = $("#loanApplicationDialogTemplate").render(data);
		container.html(formHtml);
		
		var loanapplicationtabs = $(".loanapplicationtabs").tabs({
			"show": function(event, ui) {
				var curTab = $('#newtabs .ui-tabs-panel:not(.ui-tabs-hide)');
      			var curTabID = curTab.prop("id");
			},
			"select": function( event, ui ) {
				if($(ui.panel).attr('id') == ("schedule")) {
					previewLoanApplicationSchedule();
				}
			}
		});
		
		$("#productId").change(function() {
			var loanProductId = $("#productId").val();
			loadTabbedLoanApplicationForm(dialogDiv, data.clientId, loanProductId, data.loanType);
		});
		
		$('.datepickerfield').datepicker({constrainInput: true, defaultDate: 0, maxDate: 0, dateFormat: custom.datePickerDateFormat});
		$('.datepickerfieldnoconstraint').datepicker({constrainInput: true, defaultDate: 0, dateFormat: custom.datePickerDateFormat});
		
		var chargeIndex = 0;
		if(typeof data.charges === "object") {
			chargeIndex = data["charges"].length;
		}
		$("#loanapp-addLoanCharge").button({icons: {primary: "ui-icon-circle-plus"}}).click(function(e) {
			var chargeId = $('#chargeOptions option:selected').val();
			
				var addLoanChargeSuccess = function (chargeData) {
					chargeIndex++;
					chargeData["index"] = chargeIndex;
					var loanChargeHtml = $("#loanApplicationAddChargeRowTemplate").render(chargeData);
					$("#loanchargestable tbody").append(loanChargeHtml);
		  		
					$('.datepickerfield').datepicker({constrainInput: true, defaultDate: 0, maxDate: 0, dateFormat: custom.datePickerDateFormat});
					$('.datepickerfieldnoconstraint').datepicker({constrainInput: true, defaultDate: 0, dateFormat: custom.datePickerDateFormat});
					
					$('#loanchargestable tbody tr:last .loanapp-removeLoanCharge').button({icons: {primary: "ui-icon-trash"},text: false}).click(function(e) {
						$(this).closest('tr').remove();
	            		e.preventDefault();
	            	});
				}
				
				if (chargeId && undefined != chargeId && chargeId > 0) {
					executeAjaxRequest('charges/' + chargeId + '?template=true', 'GET', "", addLoanChargeSuccess, formErrorFunction);
				}
		    e.preventDefault();
		});
		
		if(typeof data.charges === "object") {
			 $("#loanchargestable tbody tr .loanapp-removeLoanCharge").each(function(index) {
				 $(this).button({icons: {primary: "ui-icon-trash"},text: false}).click(function(e) {
					$(this).closest('tr').remove();
	            	e.preventDefault();
	            });
			 });
	    }
		 
		var collateralIndex = 0;
		if(typeof data.collateral === "object") {
			collateralIndex = data["collateral"].length;
		}
		$("#loanapp-addCollateralType").button({icons: {primary: "ui-icon-circle-plus"}}).click(function(e) {
			
			var addLoanCollateralItemSuccess = function (collateralData) {
				collateralIndex++;
				collateralData["index"] = collateralIndex;
				var collateralHtml = $("#loanApplicationAddCollateralRowTemplate").render(collateralData);
				$("#loancollateraltable tbody").append(collateralHtml);
		  		
				$('#loancollateraltable tbody tr:last .loanapp-removeCollateralType').button({icons: {primary: "ui-icon-trash"},text: false}).click(function(e) {
					$(this).closest('tr').remove();
            		e.preventDefault();
            	});
				}
			
			// have to add 'id' as a field (along with 'loanCollateralOptions') otherwise platform thinks it has to filter it out of json results
			var productId = $("#productId").val();
			executeAjaxRequest('loans/template?templateType=collateral&productId='+ productId +'&fields=id,loanCollateralOptions', 'GET', "", addLoanCollateralItemSuccess, formErrorFunction);
		    e.preventDefault();
		});
		
		if(typeof data.collateral === "object") {
			 $("#loancollateraltable tbody tr .loanapp-removeCollateralType").each(function(index) {
				 $(this).button({icons: {primary: "ui-icon-trash"},text: false}).click(function(e) {
					$(this).closest('tr').remove();
	            	e.preventDefault();
	            });
			 });
	    }
	    
	    if(data.calendarOptions){
	        loadAvailableCalendars(data.calendarOptions, data.meeting);   
        }
        

	};
	
	function loadTabbedLoanApplicationForm(container, clientId, productId , group, loanType, isjlgbulk) {
		
		var loadTabsOnSuccessFunction = function(data, textStatus, jqXHR) {
			//set loan type
			data.loanType = loanType;

			// show full application form with values defaulted
			var formHtml = $("#loanApplicationDialogTemplate").render(data);
			container.html(formHtml);
			
			var loanapplicationtabs = $(".loanapplicationtabs").tabs({
				"show": function(event, ui) {
					var curTab = $('#newtabs .ui-tabs-panel:not(.ui-tabs-hide)');
	      			var curTabID = curTab.prop("id");
				},
				"select": function( event, ui ) {
					if($(ui.panel).attr('id') == ("schedule")) {
						previewLoanApplicationSchedule();
					}
				}
			});
			
			$("#productId").change(function() {
				var loanProductId = $("#productId").val();
				loadTabbedLoanApplicationForm(dialogDiv, data.clientId, loanProductId, loanType );
			});
			
			$('.datepickerfield').datepicker({constrainInput: true, defaultDate: 0, maxDate: 0, dateFormat: custom.datePickerDateFormat});
			$('.datepickerfieldnoconstraint').datepicker({constrainInput: true, defaultDate: 0, dateFormat: custom.datePickerDateFormat});
			
			var chargeIndex = 0;
			if(typeof data.charges === "object") {
				chargeIndex = data["charges"].length;
			}
			$("#loanapp-addLoanCharge").button({icons: {primary: "ui-icon-circle-plus"}}).click(function(e) {
				var chargeId = $('#chargeOptions option:selected').val();
				
					var addLoanChargeSuccess = function (chargeData) {
						chargeIndex++;
						chargeData["index"] = chargeIndex;
						var loanChargeHtml = $("#loanApplicationAddChargeRowTemplate").render(chargeData);
						$("#loanchargestable tbody").append(loanChargeHtml);
			  		
						$('.datepickerfield').datepicker({constrainInput: true, defaultDate: 0, maxDate: 0, dateFormat: custom.datePickerDateFormat});
						$('.datepickerfieldnoconstraint').datepicker({constrainInput: true, defaultDate: 0, dateFormat: custom.datePickerDateFormat});
						
						$('#loanchargestable tbody tr:last .loanapp-removeLoanCharge').button({icons: {primary: "ui-icon-trash"},text: false}).click(function(e) {
							$(this).closest('tr').remove();
		            		e.preventDefault();
		            	});
					}
					
					if (chargeId && undefined != chargeId && chargeId > 0) {
						executeAjaxRequest('charges/' + chargeId + '?template=true', 'GET', "", addLoanChargeSuccess, formErrorFunction);
					}
			    e.preventDefault();
			});
			
			 if(typeof data.charges === "object") {
				 $("#loanchargestable tbody tr .loanapp-removeLoanCharge").each(function(index) {
					 $(this).button({icons: {primary: "ui-icon-trash"},text: false}).click(function(e) {
						$(this).closest('tr').remove();
		            	e.preventDefault();
		            });
				 });
		    }
			 
			var collateralIndex = 0;
			$("#loanapp-addCollateralType").button({icons: {primary: "ui-icon-circle-plus"}}).click(function(e) {
				
				var addLoanCollateralItemSuccess = function (collateralData) {
					collateralIndex++;
					collateralData["index"] = collateralIndex;
					var collateralHtml = $("#loanApplicationAddCollateralRowTemplate").render(collateralData);
					$("#loancollateraltable tbody").append(collateralHtml);
			  		
					$('#loancollateraltable tbody tr:last .loanapp-removeCollateralType').button({icons: {primary: "ui-icon-trash"},text: false}).click(function(e) {
						$(this).closest('tr').remove();
	            		e.preventDefault();
	            	});
					}
				
				// have to add 'id' as a field (along with 'loanCollateralOptions') otherwise platform thinks it has to filter it out of json results
				var productId = $("#productId").val();
				executeAjaxRequest('loans/template?templateType=collateral&productId='+ productId +'&fields=id,loanCollateralOptions', 'GET', "", addLoanCollateralItemSuccess, formErrorFunction);
			    e.preventDefault();
			});

			if(data.calendarOptions){
				loadAvailableCalendars(data.calendarOptions);   
			}
                

            if(isjlgbulk){
            	//This is for bulk JLG loans hide applicant
            	$('.applicant').each(function(i) {
					$(this).html('');
				});
            }

		};
		
		
		if(!(clientId === undefined) && !(group === undefined)){
			//Client Id and Group Id are not null for JLG loans 
			executeAjaxRequest('loans/template?templateType=jlg&clientId=' + clientId + '&groupId=' + group.id + '&productId=' + productId, 'GET', "", loadTabsOnSuccessFunction, formErrorFunction);
		}else if(!(clientId === undefined)){
		// loan loan application template providing selected client and product infomation
			executeAjaxRequest('loans/template?templateType=individual&clientId=' + clientId + '&productId=' + productId, 'GET', "", loadTabsOnSuccessFunction, formErrorFunction);
		}else if(isjlgbulk && !(group === undefined)) {
			executeAjaxRequest('loans/template?templateType=jlgbulk&groupId=' + group.id + '&productId=' + productId, 'GET', "", loadTabsOnSuccessFunction, formErrorFunction);
		}else if(!(group === undefined)){
			executeAjaxRequest('loans/template?templateType=group&groupId=' + group.id + '&productId=' + productId, 'GET', "", loadTabsOnSuccessFunction, formErrorFunction);
 		}	
	}
	
	function previewLoanApplicationSchedule() {
		
		var newFormData = JSON.stringify($('#entityform').serializeObject());
    	
		var successFunction = function(data, textStatus, jqXHR) {
	  		removeErrors("#formerrors");
	  		var loanScheduleHtml = $("#newLoanScheduleTemplate").render(data);
	  		$("#previewloanschedule").html(loanScheduleHtml);
		};
		
		var errorFunction = function(jqXHR, textStatus, errorThrown) {
			handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
		};
		executeAjaxRequest('loans?command=calculateLoanSchedule', "POST", newFormData, successFunction, errorFunction);	  
	}
	
	// loan product related
	function submitTabbedLoanProduct(divContainer, loanProductId) {
		
		var serializationOptions = {};
		serializationOptions["checkboxesAsBools"] = true;
		
		var serializedArray = {};
		serializedArray = $('#entityform').serializeObject(serializationOptions);
		
		if (!serializedArray["charges"]) {
			serializedArray["charges"] = new Array();
		}
		
		var newFormData = JSON.stringify(serializedArray);
		
		var successFunction =  function(data, textStatus, jqXHR) {
			divContainer.dialog("close");
			listLoanProducts();
		};
		
		if (loanProductId) {
			executeAjaxRequest('loanproducts/' + loanProductId, "PUT", newFormData, successFunction, formErrorFunction);
		} else {
			executeAjaxRequest('loanproducts', "POST", newFormData, successFunction, formErrorFunction);
		}
	}
	
	function listLoanProducts() {
		
		var tableName='loanproduct';
		
		var successFunction = function(data, textStatus, jqXHR) {

			var crudObject = new Object();
			crudObject.crudRows = data;
			
			var html = $("#" + tableName + "ListTemplate").render(crudObject);
			$("#listplaceholder").html(html);  

			$("a.edit" + tableName).click( function(e) {
				var linkId = this.id;
				var entityId = linkId.replace("edit" + tableName, "");

				var resourceUrl = tableName + "s/" + entityId;
				
				launchLoanProductDialog(entityId);
				
				e.preventDefault();
			});

			var oTable = displayListTable(tableName + "stable");
		  };
	

		  executeAjaxRequest(tableName + 's', 'GET', "", successFunction, formErrorFunction);
	}
	
	var launchLoanProductDialogOnSuccessFunction = function(data, textStatus, jqXHR) {
		var dialogDiv = $("<div id='dialog-form'></div>");
		var saveButton = doI18N('dialog.button.save');
		var cancelButton = doI18N('dialog.button.cancel');
		
		var buttonsOpts = {};
		buttonsOpts[saveButton] = function() {
			submitTabbedLoanProduct(dialogDiv, data.id);
		};
		// end of buttonsOpts for save button
		
		buttonsOpts[cancelButton] = function() {$(this).dialog( "close" );};
		
		var titleCode = 'dialog.title.add.loanproduct';
		if (data.id){
			titleCode = 'dialog.title.loanproduct.details';
		}
		dialogDiv.dialog({
		  		title: doI18N(titleCode), 
		  		width: 1100, 
		  		height: 500, 
		  		modal: true,
		  		buttons: buttonsOpts,
		  		close: function() {
		  			// if i dont do this, theres a problem with errors being appended to dialog view second time round
		  			$(this).remove();
				},
		  		open: function (event, ui) {
		  			
		  			var formHtml = $("#loanProductDialogTemplate").render(data);
		  			dialogDiv.html(formHtml);
		  			
		  			var loanproducttabs = $(".loanproducttabs").tabs({
		  				"show": function(event, ui) {
		  					var curTab = $('#newtabs .ui-tabs-panel:not(.ui-tabs-hide)');
		  	      			var curTabID = curTab.prop("id");
		  				},
		  				"select": function( event, ui ) {
		  				}
		  			});
		  			
	  				//(initialize comboboxes)
	  				$("#fundSourceAccountId").combobox();
	  				$("#loanPortfolioAccountId").combobox();
	  				$("#interestOnLoanAccountId").combobox();
	  				$("#incomeFromFeeAccountId").combobox();
	  				$("#incomeFromPenaltyAccountId").combobox();
	  				$("#writeOffAccountId").combobox();
	  				$("#receivableInterestAccountId").combobox();
	  				$("#receivableFeeAccountId").combobox();
	  				$("#receivablePenaltyAccountId").combobox();
	  				
	  				var showCashFinancialPlaceholders = function() {
	  					 $("#accountingPlaceholdersDiv").show();
	  		        	 //hide receivables
	  		        	 $("#interestReceivableRow").hide();
	  		        	 $("#feeReceivableRow").hide();
	  		        	 $("#penaltyReceivableRow").hide();
	  				};
	  				
	  				var showAccrualFinancialPlaceholders = function() {
	  					 $("#accountingPlaceholdersDiv").show();
	  		        	 //show receivables
	  		        	 $("#interestReceivableRow").show();
	  		        	 $("#feeReceivableRow").show();
	  		        	 $("#penaltyReceivableRow").show();
	  				}
	  				
	  				//onchange events for radio buttonaccountingRule
	  				 $("input[name=accountingRule]").change(function() {
	  			        var selectedValue = $(this).val();
	  			        if(selectedValue == "1"){
	  			        	 $("#accountingPlaceholdersDiv").hide();
	  			        }else if (selectedValue == "2"){
	  			        	 showCashFinancialPlaceholders();
	  			        }else if (selectedValue == "3"){
	  			        	 showAccrualFinancialPlaceholders();
	  			        }
	  			    }); 
	  			    
	  			    //hide accounting placeholders div on page load
	  			    if(data.accountingRule.value == "NONE"){
	  			    	$("#accountingPlaceholdersDiv").hide();
	  			    }else if (data.accountingRule.value == "CASH BASED"){
	  			    	 showCashFinancialPlaceholders();
	  			    }else if (data.accountingRule.value == "ACCRUAL BASED"){
	  			    	 showAccrualFinancialPlaceholders();
	  			    }
		  			
		  			$('.datepickerfield').datepicker({constrainInput: true, defaultDate: 0, maxDate: 0, dateFormat: custom.datePickerDateFormat});
					$('.datepickerfieldnoconstraint').datepicker({constrainInput: true, defaultDate: 0, dateFormat: custom.datePickerDateFormat});
					
					var chargeIndex = 0;
					if(undefined === data.charges || data.charges === null) {
						chargeIndex = 0;
					} else {
						chargeIndex = data["charges"].length;
					}
					
					$("#loanproduct-addLoanCharge").button({icons: {primary: "ui-icon-circle-plus"}}).click(function(e) {
						
						var chargeId = $('#chargeOptions option:selected').val();
						
						var addProductChargeSuccess = function (chargeData) {
								chargeIndex++;
								chargeData["index"] = chargeIndex;
								var loanChargeHtml = $("#loanProductAddChargeRowTemplate").render(chargeData);
								$("#loanchargestable tbody").append(loanChargeHtml);
					  		
								$('.datepickerfield').datepicker({constrainInput: true, defaultDate: 0, maxDate: 0, dateFormat: custom.datePickerDateFormat});
								$('.datepickerfieldnoconstraint').datepicker({constrainInput: true, defaultDate: 0, dateFormat: custom.datePickerDateFormat});
								
								$('#loanchargestable tbody tr:last .loanproduct-removeLoanCharge').button({icons: {primary: "ui-icon-trash"},text: false}).click(function(e) {
									$(this).closest('tr').remove();
				            		e.preventDefault();
				            	});
						}
							
						if (chargeId && undefined != chargeId && chargeId > 0) {
							executeAjaxRequest('charges/' + chargeId + '?template=true', 'GET', "", addProductChargeSuccess, formErrorFunction);
						}
					    e.preventDefault();
					});
					
					if(undefined === data.charges || data.charges === null) {
						// do nothing
					} else {
						 $("#loanchargestable tbody tr .loanproduct-removeLoanCharge").each(function(index) {
							 $(this).button({icons: {primary: "ui-icon-trash"},text: false}).click(function(e) {
								$(this).closest('tr').remove();
				            	e.preventDefault();
				            });
						 });
					}
		  		}
		  	}).dialog('open');		
	};

	function launchLoanProductDialog(loanProductId) {
		
		if (loanProductId) {
			executeAjaxRequest('loanproducts/' + loanProductId + '?template=true', 'GET', "", launchLoanProductDialogOnSuccessFunction, formErrorFunction);
		} else {
			executeAjaxRequest('loanproducts/template', 'GET', "", launchLoanProductDialogOnSuccessFunction, formErrorFunction);
		}
	}
	// end of loan product
	
	// start of savings product
	function submitTabbedSavingsProduct(divContainer, savingsProductId) {
		
		var serializationOptions = {};
		serializationOptions["checkboxesAsBools"] = true;
		
		var serializedArray = {};
		serializedArray = $('#entityform').serializeObject(serializationOptions);
		
		var newFormData = JSON.stringify(serializedArray);
		
		var successFunction =  function(data, textStatus, jqXHR) {
			divContainer.dialog("close");
			listSavingsProducts();
		};
		
		if (savingsProductId) {
			executeAjaxRequest('savingsproducts/' + savingsProductId, "PUT", newFormData, successFunction, formErrorFunction);
		} else {
			executeAjaxRequest('savingsproducts', "POST", newFormData, successFunction, formErrorFunction);
		}
	}
	
	function listSavingsProducts() {
		
		var successFunction = function(data, textStatus, jqXHR) {

			var crudObject = new Object();
			crudObject.crudRows = data;
			
			var html = $("#savingsProductListTemplate").render(crudObject);
			$("#listplaceholder").html(html);  

			$("a.editsavingproduct").click( function(e) {
				var linkId = this.id;
				var entityId = linkId.replace("editsavingproduct", "");

				var resourceUrl = "savingsproducts/" + entityId;
				
				launchSavingsProductDialog(entityId);
				
				e.preventDefault();
			});

			var oTable = displayListTable("savingsproductstable");
		  };
	

		  executeAjaxRequest('savingsproducts', 'GET', "", successFunction, formErrorFunction);
	}
	
	var launchSavingsProductDialogOnSuccessFunction = function(data, textStatus, jqXHR) {
		var dialogDiv = $("<div id='dialog-form'></div>");
		var saveButton = doI18N('dialog.button.save');
		var cancelButton = doI18N('dialog.button.cancel');
		
		var buttonsOpts = {};
		buttonsOpts[saveButton] = function() {
			submitTabbedSavingsProduct(dialogDiv, data.id);
		};
		// end of buttonsOpts for save button
		
		buttonsOpts[cancelButton] = function() {$(this).dialog( "close" );};
		
		var titleCode = 'dialog.title.add.savingsproduct';
		if (data.id){
			titleCode = 'dialog.title.savingsproduct.details';
		}
		dialogDiv.dialog({
		  		title: doI18N(titleCode), 
		  		width: 1100, 
		  		height: 500, 
		  		modal: true,
		  		buttons: buttonsOpts,
		  		close: function() {
		  			// if i dont do this, theres a problem with errors being appended to dialog view second time round
		  			$(this).remove();
				},
		  		open: function (event, ui) {
		  			
		  			var formHtml = $("#savingsProductDialogTemplate").render(data);
		  			dialogDiv.html(formHtml);
		  			
		  			var savingsproducttabs = $(".savingsproducttabs").tabs({
		  				"show": function(event, ui) {
		  					var curTab = $('.savingsproducttabs .ui-tabs-panel:not(.ui-tabs-hide)');
		  	      			var curTabID = curTab.prop("id");
		  				},
		  				"select": function( event, ui ) {
		  				}
		  			});
		  			
		  			$('.datepickerfield').datepicker({constrainInput: true, defaultDate: 0, maxDate: 0, dateFormat: custom.datePickerDateFormat});
					$('.datepickerfieldnoconstraint').datepicker({constrainInput: true, defaultDate: 0, dateFormat: custom.datePickerDateFormat});
					
					$('.noyeardatepickerfield').datepicker(
					{
						constrainInput: true, 
						defaultDate: 0, 
						dateFormat: 'dd MM',
						changeMonth: true,
				        changeYear: false,
				        showButtonPanel: true
				    });
		  		}
		  	}).dialog('open');		
	};
	
	function launchSavingsProductDialog(savingsProductId) {
		
		if (savingsProductId) {
			executeAjaxRequest('savingsproducts/' + savingsProductId + '?template=true', 'GET', "", launchSavingsProductDialogOnSuccessFunction, formErrorFunction);
		} else {
			executeAjaxRequest('savingsproducts/template', 'GET', "", launchSavingsProductDialogOnSuccessFunction, formErrorFunction);
		}
	}
	// end of savings product
	
	// start of savings account
	function loadTabbedSavingsAccountForm(container, clientId, productId, groupId) {
		
		var loadTabsOnSuccessFunction = function(data, textStatus, jqXHR) {
			var formHtml = $("#savingsAccountDialogTemplate").render(data);
			container.html(formHtml);
			
			var loanapplicationtabs = $(".savingsaccounttabs").tabs({
				"show": function(event, ui) {
					var curTab = $('.savingsaccounttabs .ui-tabs-panel:not(.ui-tabs-hide)');
	      			var curTabID = curTab.prop("id");
				},
				"select": function( event, ui ) {
				}
			});
			
			$("#productId").change(function() {
				var savingsProductId = $("#productId").val();
				loadTabbedSavingsAccountForm(container, data.clientId, savingsProductId);
			});
			
			$("#activeCheckbox").change(function() {
				var selected = this.checked;
				if (selected) {
					$("#activationDate").removeAttr("disabled");
				} else {
					$("#activationDate").attr("disabled", "disabled");
				}
			});
			
			$('.datepickerfield').datepicker({constrainInput: true, defaultDate: 0, maxDate: 0, dateFormat: custom.datePickerDateFormat});
			$('.datepickerfieldnoconstraint').datepicker({constrainInput: true, defaultDate: 0, dateFormat: custom.datePickerDateFormat});
		};
		
		// load savings account template providing selected client and product infomation
		if(!(clientId === undefined)) {
			executeAjaxRequest('savingsaccounts/template?clientId=' + clientId + '&productId=' + productId, 'GET', "", loadTabsOnSuccessFunction, formErrorFunction);
		}
		else if(!(groupId === undefined)){
			executeAjaxRequest('savingsaccounts/template?groupId=' + groupId + '&productId=' + productId, 'GET', "", loadTabsOnSuccessFunction, formErrorFunction);
		}	
	}
	
	function submitTabbedSavingsAccount(divContainer, clientId, groupId) {
		
		var serializationOptions = {};
		serializationOptions["checkboxesAsBools"] = true;
		
		var serializedArray = {};
		serializedArray = $('#entityform').serializeObject(serializationOptions);	
		var newFormData = JSON.stringify(serializedArray);
		
		var successFunction =  function(data, textStatus, jqXHR) {
			divContainer.dialog("close");
			if (clientId) {
				showILClient(clientId);
			} else {
				showGroup(groupId);
			}
		};
		
		executeAjaxRequest('savingsaccounts', "POST", newFormData, successFunction, formErrorFunction);	  
	}

	var launchSavingsAccountDialogOnSuccessFunction = function(data, textStatus, jqXHR) {
		var dialogDiv = $("<div id='dialog-form'></div>");
		var saveButton = doI18N('dialog.button.save');
		var cancelButton = doI18N('dialog.button.cancel');
		
		var buttonsOpts = {};
		buttonsOpts[saveButton] = function() {
			submitTabbedSavingsAccount(dialogDiv, data.clientId, data.groupId);
		};
		// end of buttonsOpts for save button
		
		buttonsOpts[cancelButton] = function() {$(this).dialog( "close" );};
		
		dialogDiv.dialog({
		  		title: doI18N('dialog.title.newSavingsAccount'), 
		  		width: 1100, 
		  		height: 450, 
		  		modal: true,
		  		buttons: buttonsOpts,
		  		close: function() {
		  			// if i dont do this, theres a problem with errors being appended to dialog view second time round
		  			$(this).remove();
				},
		  		open: function (event, ui) {
		  			if (data.savingsProductId) {
		  				loadTabbedSavingsAccountForm(dialogDiv, data.clientId, data.savingsProductId , data.groupId);
		  			} else {
		  				var formHtml = $("#savingsAccountSelectProductDialogTemplate").render(data);
		  				dialogDiv.html(formHtml);
		  			}
					
					$("#productId").change(function() {
						var savingsProductId = $("#productId").val();
						loadTabbedSavingsAccountForm(dialogDiv, data.clientId, savingsProductId, data.groupId);
					});
		  		}
		  	}).dialog('open');		
	};
	
	function launchSavingsAccountDialog(clientId) {
		executeAjaxRequest('savingsaccounts/template?clientId=' + clientId, 'GET', "", launchSavingsAccountDialogOnSuccessFunction, formErrorFunction);	
	}
	
	function launchGroupSavingsAccountDialog(groupId) {
		executeAjaxRequest('savingsaccounts/template?groupId=' + groupId, 'GET', "", launchSavingsAccountDialogOnSuccessFunction, formErrorFunction);
	}
	// end of savings account
	
	function removeLoanCharge(loanId, loanChargeId, parenttab) {

		var successFunction = function(data, textStatus, jqXHR) {
			$("#dialog-form").dialog("close");
			loadILLoan(loanId, parenttab);
		};

		popupConfirmationDialogAndPost('loans/' + loanId +'/charges/' + loanChargeId, 'DELETE', 'dialog.title.confirmation.required', 400, 225, 0, successFunction);
	}
	
	function modifyLoanCharge(loanId, loanChargeId, parenttab) {

		var successFunction = function(data, textStatus, jqXHR) {
			$("#dialog-form").dialog("close");
			loadILLoan(loanId, parenttab);
		};
		
		var getAndPutUrl = 'loans/' + loanId +'/charges/' + loanChargeId;
		var templateSelector = "#modifyLoanChargeFormTemplate";
		var width = 400;
		var height = 250;
		
		popupDialogWithFormView(getAndPutUrl, getAndPutUrl, 'PUT', 'dialog.title.update.details', templateSelector, 400, 225, successFunction);

		return false;
	}
	
	function waiveLoanCharge(loanId, loanChargeId, parenttab) {

		var successFunction = function(data, textStatus, jqXHR) {
			$("#dialog-form").dialog("close");
			loadILLoan(loanId, parenttab);
		};

		popupConfirmationDialogAndPost('loans/' + loanId +'/charges/' + loanChargeId + '?command=waive', 'POST', 'dialog.title.confirmation.required', 400, 225, 0, successFunction);

		return false;
	}
	
	function removeLoanCollateral(loanId, loanCollateralId) {

        var successFunction = function(data, textStatus, jqXHR) {
            $("#dialog-form").dialog("close");
            loadILLoan(loanId);
        };

        popupConfirmationDialogAndPost('loans/' + loanId +'/collaterals/' + loanCollateralId, 'DELETE', 'dialog.title.confirmation.required', 400, 225, 0, successFunction);

        return false;
    }
    
    function modifyLoanCollateral(loanId, loanCollateralId) {

        var successFunction = function(data, textStatus, jqXHR) {
            $("#dialog-form").dialog("close");
            loadILLoan(loanId);
        };
        
        var getUrl = 'loans/' + loanId +'/collaterals/' + loanCollateralId+"?template=true";
        var putUrl = 'loans/' + loanId +'/collaterals/' + loanCollateralId;
        var templateSelector = "#loanCollateralFormTemplate";
        var width = 550;
        var height = 425;
        
        popupDialogWithFormView(getUrl, putUrl, 'PUT', 'dialog.title.update.details', templateSelector, width, height, successFunction);

        return false;
    }

	function genSaveSuccessFunctionReloadLoan(loanId, parenttab) {
		return 'var saveSuccessFunctionReloadLoan = function(data, textStatus, jqXHR) { ' + 
						  	' $("#dialog-form").dialog("close");' +
						  	' var contentTab = ' + parenttab + ';' +
							' loadLoan(' + loanId + ', "' + parenttab + '");' +
							' clientDirty = true;' +
							' groupDirty = true;' +
						'};';
	}

	function submitLoanApplication(clientId, groupId) {
		
		var newFormData = JSON.stringify($('#entityform').serializeObject());
    	
		var successFunction =  function(data, textStatus, jqXHR) {
			if (clientId){
				showILClient(clientId);
			} else {
				showGroup(groupId);
			}
		};
		
		executeAjaxRequest('loans', "POST", newFormData, successFunction, formErrorFunction);	  

	}
	
	
function showILLoan(loanId, product, loanAccountNo) {
	showLoan(loanId, product, loanAccountNo, 'clientdatatabs');	
}

function showGroupLoan(loanId, product, loanAccountNo) {
	showLoan(loanId, product, loanAccountNo, 'groupdatatabs');	
}

function showLoan(loanId, product, loanAccountNo, parenttab){
	var newLoanTabId='loan'+loanId+'tab';
	//show existing tab if this Id is already present
	if(tabExists(parenttab, newLoanTabId)){
		var index = $('#'+ parenttab +' a[href="#'+ newLoanTabId +'"]').parent().index(); 
		$('#'+ parenttab).tabs('select', index);
		
		var title = product + ": #" + loanAccountNo;		
		if (undefined === loanAccountNo || loanAccountNo == '') {
			title = product + ": #" + loanId;
		}
		$('#'+ parenttab +' .ui-tabs-selected:first a').text(title);
	}
	//else create new tab and set identifier properties
	else{
		var title = product + ": #" + loanAccountNo;		
		if (undefined === loanAccountNo) {
			title = product + ": #" + loanId;
		}
		$newtabs.tabs( "add", "unknown.html", title);
		loadLoan(loanId, parenttab);
		//add ids and titles to newly added div's and a'hrefs
		var lastAHref=$('#'+ parenttab +'> ul > li:last > a');
		var lastDiv=$('#'+ parenttab +' > div:last')
		var lastButOneDiv=$('#'+ parenttab +' > div:last').prev();
		lastAHref.attr('href','#loan'+loanId+'tab');
		lastButOneDiv.attr('id',newLoanTabId);
		//the add functionality seems to be adding a dummy div at the end 
		//am deleting the same to make div manipulation easier
		lastDiv.remove();
	}
}

//checks for existence of tab with given Id
function tabExists(parenttab, tabId){
    var tabFound = false;
    $('#' + parenttab + ' > div').each(function(index, ui) {
        if($(ui).attr('id') == tabId){
        	tabFound = true;
        }
    });
    return tabFound;
}

function loadILLoan(loanId, parenttab) {
	loadLoan(loanId, parenttab);	
}

function loadGroupLoan(loanId) {
	loadLoan(loanId);
}

function loadLoan(loanId, parenttab) {
	var parenttab = parenttab;	
	var loanUrl = 'loans/' + loanId + "?associations=all";

	var errorFunction = function(jqXHR, status, errorThrown, index, anchor) {
		handleXhrError(jqXHR, status, errorThrown, "#formErrorsTemplate", "#formerrors");
	};

	var successFunction = function(data, status, xhr) {
	        	
	        		var currentTabIndex = $newtabs.tabs('option', 'selected');
	            	var currentTabAnchor = $newtabs.data('tabs').anchors[currentTabIndex];
	            
	        		var tableHtml = $("#loanDataTabTemplate").render(data);
	        		
	        		var currentTab = $("#"+parenttab).children(".ui-tabs-panel").not(".ui-tabs-hide");
	        		currentTab.html(tableHtml);

	        		var curTabID = currentTab.prop("id")

	        		var offsetToSubmittedDate = 0;
	        		var offsetToApprovalDate = 0;
	        		var offsetToExpectedDisbursementDate = 0;
	            	var offsetToDisbursalDate = 0;
	            	var maxOffset = 0; // today
	        		var today = new Date();
	        		
	        		var dateParts = data.timeline.submittedOnDate;
	        		if (undefined != dateParts) {
        				var year = dateParts[0];
        				var month = parseInt(dateParts[1]) - 1; // month is zero indexed
        				var day = dateParts[2];

        				var today = new Date();
        				var offsetDate = new Date();
        				offsetDate.setFullYear(year, month, day);

        				offsetToSubmittedDate = Date.daysBetween(today, offsetDate);
        			}
	        		
	        		dateParts = data.timeline.approvedOnDate;
	        		if (undefined != dateParts) {
        				var year = dateParts[0];
        				var month = parseInt(dateParts[1]) - 1; // month is zero indexed
        				var day = dateParts[2];

        				var today = new Date();
        				var offsetDate = new Date();
        				offsetDate.setFullYear(year, month, day);

        				offsetToApprovalDate = Date.daysBetween(today, offsetDate);
        			}
	        		
	        		dateParts = data.timeline.expectedDisbursementDate;
	        		if (undefined != dateParts) {
        				var year = dateParts[0];
        				var month = parseInt(dateParts[1]) - 1; // month is zero indexed
        				var day = dateParts[2];

        				var today = new Date();
        				var offsetDate = new Date();
        				offsetDate.setFullYear(year, month, day);

        				offsetToExpectedDisbursementDate = Date.daysBetween(today, offsetDate);
        				if (offsetToApprovalDate > offsetToExpectedDisbursementDate) {
        					offsetToExpectedDisbursementDate = offsetToApprovalDate;
        				}
        			}
	        		
	        		dateParts = data.timeline.actualDisbursementDate;
	        		if (undefined != dateParts) {
        				var year = dateParts[0];
        				var month = parseInt(dateParts[1]) - 1; // month is zero indexed
        				var day = dateParts[2];

        				var today = new Date();
        				var offsetDate = new Date();
        				offsetDate.setFullYear(year, month, day);

        				offsetToDisbursalDate = Date.daysBetween(today, offsetDate);
        			}
	        		
	        		//adding styles for vertical sub-tabs
	        		//$( ".loantabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
	        		//$( ".loantabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
	        		//var $loantabs = $(".loantabs").tabs({
		        	var $loantabs = $("#loantabs" + loanId).tabs({
						"show": function(event, ui) {
							var curTab = $('#' + parenttab + ' .ui-tabs-panel:not(.ui-tabs-hide)');
			      			var curTabID = curTab.prop("id")
						},
						"select": function( event, ui ) {
        					if($(ui.panel).attr( 'id' ) == ( "loanDocuments"+ loanId )){
        						refreshLoanDocuments(loanId)
        					}
   						}
					});
		        	
	        	$('.modifyloanapp').button({icons: {primary: "ui-icon-document"}}).click(function(e) {
					var linkId = this.id;
					var loanId = linkId.replace("modifyloanappbtn", "");
					launchModifyLoanApplicationDialog(loanId);
					
				    e.preventDefault();
				});
				$('button.modifyloanapp span').text(doI18N('button.application.modify'));
	        		
	        	$('.rejectloan').button().click(function(e) {
					var linkId = this.id;
					var loanId = linkId.replace("rejectbtn", "");
					var postUrl = 'loans/' + loanId + '?command=reject';
					var templateSelector = "#loanApplicationRejectionTemplate";
					var width = 500; 
					var height = 350;
					var defaultOffset = offsetToSubmittedDate;
	
					popupDialogWithPostOnlyFormView(postUrl, 'POST', 'dialog.title.reject.loan', templateSelector, width, height, saveSuccessFunctionReloadClient, offsetToSubmittedDate, defaultOffset, maxOffset);
				    e.preventDefault();
				});
	        	$('button.rejectloan span').text(doI18N('button.application.reject'));
					
				$('.withdrawnbyapplicantloan').button().click(function(e) {
						var linkId = this.id;
						var loanId = linkId.replace("withdrawnbyapplicantloanbtn", "");
						var postUrl = 'loans/' + loanId + '?command=withdrawnByApplicant';
						var templateSelector = "#loanApplicationWithdrawnTemplate";
						var width = 500; 
						var height = 350;
						var defaultOffset = offsetToSubmittedDate;
						popupDialogWithPostOnlyFormView(postUrl, 'POST', 'dialog.title.loan.withdrawn.by.client', templateSelector, width, height, saveSuccessFunctionReloadClient,  offsetToSubmittedDate, defaultOffset, maxOffset)
					    e.preventDefault();
				});
				$('button.withdrawnbyapplicantloan span').text(doI18N('button.application.withdrawnByApplicant'));
				
				$('.approveloan').button().click(function(e) {
						var linkId = this.id;
						var loanId = linkId.replace("approvebtn", "");
						var postUrl = 'loans/' + loanId + '?command=approve';
						var templateSelector = "#loanApplicationApprovalTemplate";
						var width = 500; 
						var height = 350;
						var defaultOffset = offsetToSubmittedDate;
						eval(genSaveSuccessFunctionReloadLoan(loanId, parenttab));
						popupDialogWithPostOnlyFormView(postUrl, 'POST', 'dialog.title.approve.loan', templateSelector, width, height, saveSuccessFunctionReloadLoan,  offsetToSubmittedDate, defaultOffset, maxOffset)
					    e.preventDefault();
				});
				$('button.approveloan span').text(doI18N('button.application.approve'));
					
				$('.undoapproveloan').button().click(function(e) {
						var linkId = this.id;
						var loanId = linkId.replace("undoapprovebtn", "");
						var postUrl = 'loans/' + loanId + '?command=undoapproval';
						var templateSelector = "#undoStateTransitionLoanFormTemplate";
						var width = 500; 
						var height = 350;
						var defaultOffset = offsetToSubmittedDate;
						eval(genSaveSuccessFunctionReloadLoan(loanId, parenttab));
						popupDialogWithPostOnlyFormView(postUrl, 'POST', 'dialog.title.undo.loan.approval', templateSelector, width, height, saveSuccessFunctionReloadLoan, offsetToSubmittedDate, defaultOffset, maxOffset)
					    e.preventDefault();
				});
				$('button.undoapproveloan span').text(doI18N('button.application.undoApproval'));
					
				$('.deleteloan').button().click(function(e) {
					var linkId = this.id;
					var loanId = linkId.replace("deletebtn", "");
					var url = 'loans/' + loanId;
					var width = 400; 
					var height = 225;
											
					popupConfirmationDialogAndPost(url, 'DELETE', 'dialog.title.confirmation.required', width, height, 0, saveSuccessFunctionReloadClient);
				    e.preventDefault();
				});
				$('button.deleteloan span').text(doI18N('button.application.delete'));
					
				$('.disburseloan').button().click(function(e) {
					var linkId = this.id;
					var loanId = linkId.replace("disbursebtn", "");
					var getUrl = 'loans/' + loanId + '/transactions/template?command=disburse';
					var postUrl = 'loans/' + loanId + '?command=disburse';
					var templateSelector = "#loanDisbursementTemplate";
					var width = 500; 
					var height = 400;
					var defaultOffset = offsetToExpectedDisbursementDate;
					eval(genSaveSuccessFunctionReloadLoan(loanId, parenttab));
			
					popupDialogWithFormView(getUrl, postUrl, 'POST', "dialog.title.loan.repayment", templateSelector, width, height,  saveSuccessFunctionReloadLoan);
				    e.preventDefault();
				});
				$('button.disburseloan span').text(doI18N('button.loan.disburse'));
					
				$('.undodisbursalloan').button().click(function(e) {
					var linkId = this.id;
					var loanId = linkId.replace("undodisbursalbtn", "");
					var postUrl = 'loans/' + loanId + '?command=undodisbursal';
					var templateSelector = "#undoStateTransitionLoanFormTemplate";
					var width = 500; 
					var height = 350;
					var defaultOffset = offsetToApprovalDate;
					eval(genSaveSuccessFunctionReloadLoan(loanId, parenttab));
					popupDialogWithPostOnlyFormView(postUrl, 'POST', 'dialog.title.undo.loan.disbursal', templateSelector, width, height, saveSuccessFunctionReloadLoan,  offsetToSubmittedDate, defaultOffset, maxOffset)
				    e.preventDefault();
				});
				$('button.undodisbursalloan span').text(doI18N('button.loan.undoDisbursal'));
					
				$('.repaymentloan').button().click(function(e) {
					var linkId = this.id;
					var loanId = linkId.replace("repaymentbtn", "");
					var getUrl = 'loans/' + loanId + '/transactions/template?command=repayment';
					var postUrl = 'loans/' + loanId + '/transactions?command=repayment';
					
					var templateSelector = "#transactionLoanFormTemplate";
					var width = 500; 
					var height = 450;
					var defaultOffset = offsetToApprovalDate;
					eval(genSaveSuccessFunctionReloadLoan(loanId, parenttab));
		
					popupDialogWithFormView(getUrl, postUrl, 'POST', "dialog.title.loan.repayment", templateSelector, width, height,  saveSuccessFunctionReloadLoan);
				    e.preventDefault();
				});
				$('button.repaymentloan span').text(doI18N('button.loan.repayment'));
					
				$('.waiveinterestloan').button().click(function(e) {
						var linkId = this.id;
						var loanId = linkId.replace("waiveinterestbtn", "");
						
						var getUrl = 'loans/' + loanId + '/transactions/template?command=waiveinterest';
						var postUrl = 'loans/' + loanId + '/transactions?command=waiveinterest';
						
						var templateSelector = "#transactionLoanWaiveInterestFormTemplate";
						var width = 500; 
						var height = 350;
						var defaultOffset = offsetToApprovalDate;
						
						eval(genSaveSuccessFunctionReloadLoan(loanId, parenttab));
						
						popupDialogWithFormView(getUrl, postUrl, 'POST', "dialog.title.waive.loan", templateSelector, width, height, saveSuccessFunctionReloadLoan);
					    e.preventDefault();
				});
				$('button.waiveloan span').text(doI18N('button.loan.waiveInterest'));
				
				$('.writeoffloan').button().click(function(e) {
					var linkId = this.id;
					var loanId = linkId.replace("writeoffbtn", "");
					
					var getUrl = 'loans/' + loanId + '/transactions/template?command=writeoff';
					var postUrl = 'loans/' + loanId + '/transactions?command=writeoff';
					
					var templateSelector = "#loanTransactionWriteOffFormTemplate";
					var width = 500;
					var height = 350;
					var defaultOffset = offsetToApprovalDate;
					
					eval(genSaveSuccessFunctionReloadLoan(loanId, parenttab));
					
					popupDialogWithFormView(getUrl, postUrl, 'POST', "dialog.title.writeoff.loan", templateSelector, width, height, saveSuccessFunctionReloadLoan);
				    e.preventDefault();
				});
				$('button.writeoffloan span').text(doI18N('button.loan.writeOff'));
				
				$('.closeasrescheduledloan').button().click(function(e) {
					var linkId = this.id;
					var loanId = linkId.replace("closeasrescheduledbtn", "");
					
					var getUrl = 'loans/' + loanId + '/transactions/template?command=close-rescheduled';
					var postUrl = 'loans/' + loanId + '/transactions?command=close-rescheduled';
					
					var templateSelector = "#loanTransactionWriteOffFormTemplate";
					var width = 500;
					var height = 350;
					var defaultOffset = offsetToApprovalDate;
					
					eval(genSaveSuccessFunctionReloadLoan(loanId, parenttab));
					
					popupDialogWithFormView(getUrl, postUrl, 'POST', "dialog.title.closeasrescheduledloan.loan", templateSelector, width, height, saveSuccessFunctionReloadLoan);
				    e.preventDefault();
				});
				$('button.closeasrescheduledloan span').text(doI18N('button.loan.closeAsRescheduled'));
				
				$('.closeloan').button().click(function(e) {
					var linkId = this.id;
					var loanId = linkId.replace("closebtn", "");
					
					var getUrl = 'loans/' + loanId + '/transactions/template?command=close';
					var postUrl = 'loans/' + loanId + '/transactions?command=close';
					
					var templateSelector = "#loanTransactionWriteOffFormTemplate";
					var width = 500;
					var height = 350;
					var defaultOffset = offsetToApprovalDate;
					
					eval(genSaveSuccessFunctionReloadLoan(loanId, parenttab));
					
					popupDialogWithFormView(getUrl, postUrl, 'POST', "dialog.title.close.loan", templateSelector, width, height, saveSuccessFunctionReloadLoan);
				    e.preventDefault();
				});
				$('button.closeloan span').text(doI18N('button.loan.close'));
					
				$('.adjustloanrepayment').button({
                    icons : {
                        primary : "ui-icon-pencil"
                    },
                    text : false
                }).click(function(e) {
					var linkId = this.id;
					var loanAndRepaymentId = linkId.replace("adjustrepaymentbtn", "");
					var ids = loanAndRepaymentId.split("_");
					var loanId = ids[0];
					var transactionId = ids[1];
					var getAndPostUrl = 'loans/' + loanId + '/transactions/' + transactionId + '/?template=true';
					
					var templateSelector = "#transactionLoanFormTemplate";
					var width = 500; 
					var height = 450;
					var defaultOffset = offsetToApprovalDate;

					eval(genSaveSuccessFunctionReloadLoan(loanId, parenttab));						
					popupDialogWithFormView(getAndPostUrl, getAndPostUrl, 'POST', "dialog.title.adjust.loan.repayment", templateSelector, width,  height, saveSuccessFunctionReloadLoan);
				    e.preventDefault();
				});
				
				//$('button.adjustloanrepayment span').text(doI18N('button.loanTransaction.adjust'));
				
				$('.undoloanrepayment').button({
                    icons : {
                        primary : "ui-icon-trash"
                    },
                    text : false
                }).click(function(e) {
                    var linkId = this.id;
                    var loanAndRepaymentId = linkId.replace("undorepaymentbtn", "");
                    var ids = loanAndRepaymentId.split("_");
                    var loanId = ids[0];
                    var transactionId = ids[1];
                    var postURL = 'loans/' + loanId + '/transactions/' + transactionId;
                
                    var templateSelector = "#transactionLoanFormTemplate";
                    var width = 500;
                    var height = 350;
                    var searializedArray = {};
                
                    searializedArray["dateFormat"] = custom.helperFunctions.currentDateFormat();
                    searializedArray["locale"] = custom.helperFunctions.currentLocale();
                    searializedArray["transactionDate"] = $.datepicker.formatDate(custom.datePickerDateFormat, new Date());
                    searializedArray["transactionAmount"] = 0;
                    var jsonString = JSON.stringify(searializedArray);
                
                    eval(genSaveSuccessFunctionReloadLoan(loanId, parenttab));
                    popupConfirmationDialogAndPost(postURL, 'POST', 'dialog.title.confirmation.required', width, height, 0, saveSuccessFunctionReloadLoan,jsonString);
                    e.preventDefault();
                }); 
                
				$('.addloancharge').button().click(function(e){
						var linkId = this.id;
						var loanId = linkId.replace("addloanchargebtn", "");
						var postUrl = 'loans/' + loanId + '/charges';
						var getUrl = 'loans/' + loanId + '/charges/template';

						var templateSelector = "#loanChargeFormTemplate";
						var width = 450; 
						var height = 300;

						eval(genSaveSuccessFunctionReloadLoan(loanId, parenttab));
						popupDialogWithFormView(getUrl, postUrl, 'POST', "dialog.title.addLoanCharge", templateSelector, width,  height, saveSuccessFunctionReloadLoan);
					    e.preventDefault();
				});
				
				$('.addloancollateral').button().click(function(e){
                        var linkId = this.id;
                        var loanId = linkId.replace("addloancollateralbtn", "");
                        var postUrl = 'loans/' + loanId + '/collaterals';
                        var getUrl = 'loans/' + loanId + '/collaterals/template';

                        var templateSelector = "#loanCollateralFormTemplate";
                        var width = 550; 
                        var height = 425;

                        eval(genSaveSuccessFunctionReloadLoan(loanId, parenttab));
                        popupDialogWithFormView(getUrl, postUrl, 'POST', "dialog.title.addCollateral", templateSelector, width,  height, saveSuccessFunctionReloadLoan);
                        e.preventDefault();
                });
				$('button.addloancharge span').text(doI18N('button.addLoanCharge'));
				
				//Guarantor for loan functionality
				$('.setguarantor').button(
						{icons: {
	                	primary: "ui-icon-link"},
	            	}).click(function(e) {
						var linkId = this.id;
						var loanId = linkId.replace("setGuarantorbtn", "");
						var getUrl = 'loans/'+loanId+'/guarantors/template';
						var postUrl = 'loans/'+loanId+'/guarantors';
						
						var templateSelector = "#guarantorFormTemplate";
						var width = 600; 
						var height = 350;
						
						
						eval(genSaveSuccessFunctionReloadLoan(loanId, parenttab));
						//update hidden loan Id
    		$("#").val(loanId);
	            		popupDialogWithFormView(getUrl, postUrl, 'POST', "dialog.title.edit.client.image", templateSelector, width, height,  saveSuccessFunctionReloadLoan);
	            		e.preventDefault();
	            });
	            
	            //remove guarantor buttons
	            if(data.guarantors !=null){
		            $.each(data.guarantors, function(i, val) {
		            	$('#removeguarantor'+val.id).button(
							{icons: {
		                	primary: "ui-icon-trash"},
		                	text: false
		            	}).click(function(e) {
							var deleteUrl = 'loans/'+loanId+'/guarantors/' + val.id;
							var width = 500; 
							var height = 350;
							eval(genSaveSuccessFunctionReloadLoan(loanId, parenttab));
							popupConfirmationDialogAndPost(deleteUrl, 'DELETE', 'dialog.title.confirmation.required', width, height, 0, saveSuccessFunctionReloadLoan);
		            		e.preventDefault();
		            	});
				    });
			    }
	            
				$('.assignloanofficer').button().click(function(e){

						var linkId = this.id;
						var loanId = linkId.replace("assignloanofficerbtn", "");
						var postUrl = 'loans/' + loanId + '?command=assignloanofficer';
						var getUrl = 'loans/' + loanId + '/assign/template';

						var templateSelector = "#loanReassignmentFormTemplate";
						var width = 425; 
						var height = 225;

						eval(genSaveSuccessFunctionReloadLoan(loanId, parenttab));
						popupDialogWithFormView(getUrl, postUrl, 'POST', "dialog.title.assign.loan.officer", templateSelector, width,  height, saveSuccessFunctionReloadLoan);
					    e.preventDefault();
				});
				$('button.assignloanofficer span').text(doI18N('button.assignLoanOfficer'));

				$('.unassignloanofficer').button({icons: {primary: "ui-icon-circle-close"}}).click(function(e){

						var linkId = this.id;
						var loanId = linkId.replace("unassignloanofficerbtn", "");
						var postUrl = 'loans/' + loanId + '?command=unassignloanofficer';
						var getUrl = ""
						
						var templateSelector = "#loanUnassignmentFormTemplate";
						var width = 400; 
						var height = 225;
						eval(genSaveSuccessFunctionReloadLoan(loanId, parenttab));
						
						popupDialogWithFormViewData("", postUrl, 'POST', 'dialog.title.unassign.loan.officer', templateSelector, width, height, saveSuccessFunctionReloadLoan)		
						e.preventDefault();
				});

				$('.editaccountnobtn').button({icons: {primary: "ui-icon-pencil"}}).click(function(e){

					var linkId = this.id;
					var loanId = linkId.replace("editaccountnobtn", "");
					var putUrl = 'loans/' + loanId;
					var getUrl = 'loans/' + loanId;

					var templateSelector = "#editAccountNoFormTemplate";
					var width = 425; 
					var height = 225;

					eval(genSaveSuccessFunctionReloadLoan(loanId, parenttab));
					popupDialogWithFormView(getUrl, putUrl, 'PUT', "dialog.title.edit.accountno", templateSelector, width,  height, saveSuccessFunctionReloadLoan);
				    e.preventDefault();
				});
				$('button.editaccountnobtn span').text(doI18N('link.action.edit'));
				
				custom.showRelatedDataTableInfo($loantabs, "m_loan", loanId); 

				//also fetch loan documents for this loan
				refreshLoanDocuments(loanId);
				
				//jqueryify charges buttons
				if(data.charges !=null){
				     $.each(data.charges, function(i, val) {
				        //waive loan charge buttons
				        if(document.getElementById('waiveloan'+ loanId +'charge'+val.id)){
                            $('#waiveloan'+ loanId +'charge'+val.id).button(
                                {icons: {
                                primary: "ui-icon-flag"},
                                text: false
                            }).click(function(e) {
                                waiveLoanCharge(loanId,val.id,parenttab);
                                e.preventDefault();
                            });
                        }
                        
                        //delete loan charge buttons
                        if(document.getElementById('deleteloan'+ loanId +'charge'+val.id)){
                            $('#deleteloan'+ loanId +'charge'+val.id).button({icons: {primary: "ui-icon-trash"},text: false}).click(function(e) {
                                removeLoanCharge(loanId,val.id,parenttab);
                                e.preventDefault();
                            });
                        }
                        //modify loan charge buttons
                        if(document.getElementById('modifyloan'+ loanId +'charge'+val.id)){
                            $('#modifyloan'+ loanId +'charge'+val.id).button(
                                {icons: {
                                primary: "ui-icon-pencil"},
                                text: false
                            }).click(function(e) {
                                modifyLoanCharge(loanId,val.id,parenttab);
                                e.preventDefault();
                            });
                        }
                    });
                }
                
                //jqueryify collaterals buttons
                if(data.collateral !=null){
                     $.each(data.collateral, function(i, val) {
                        //delete loan collateral buttons
                        if(document.getElementById('deleteloan'+ loanId +'collateral'+val.id)){
                            $('#deleteloan'+ loanId +'collateral'+val.id).button(
                                {icons: {
                                primary: "ui-icon-trash"},
                                text: false
                            }).click(function(e) {
                                removeLoanCollateral(loanId,val.id);
                                e.preventDefault();
                            });
                        }
                        //modify loan collateral buttons
                        if(document.getElementById('modifyloan'+ loanId +'collateral'+val.id)){
                            $('#modifyloan'+ loanId +'collateral'+val.id).button(
                                {icons: {
                                primary: "ui-icon-pencil"},
                                text: false
                            }).click(function(e) {
                                modifyLoanCollateral(loanId,val.id);
                                e.preventDefault();
                            });
                        }
                    });
                }
	        };
	    
		executeAjaxRequest(loanUrl, 'GET', "", successFunction, errorFunction);	  
		
}

function loadTransactionForm(){
	//initially hide all payment details
	$('.paymentDetail').hide();

	var showEFTPaymentDetails = function() {
	    $('.accountDetail').show();
	  	$('.routingCodeDetail').show();
	};

	var showReceiptPaymentDetails = function() {
	   $('.receiptDetail').show();
	   $('.bankDetail').show();
	};

	var showCheckPaymentDetails = function() {
		$('.accountDetail').show();
	  	$('.checkDetail').show();
	  	$('.routingCodeDetail').show();
	};

	var showDetailFieldsBasedOnPaymentType = function() {
		var selectedPaymentTypeId = $('#paymentTypeId').val();
		$('.paymentDetail').hide();
		//behavior for checks
	  	if( selectedPaymentTypeId == 2){
	  		showCheckPaymentDetails();
	  	}//behavior for receipts
	  	else if (selectedPaymentTypeId == 3){
	  		showReceiptPaymentDetails();
	  	}//behavior for EFT
	  	else if (selectedPaymentTypeId == 4){
  			showEFTPaymentDetails();
	  	}
	}

	showDetailFieldsBasedOnPaymentType();

	//on change function for payment type Id
	$('#paymentTypeId').change(function(e) {
	   showDetailFieldsBasedOnPaymentType();
	});
}

function loadGuarantorForm(){
	//initially hide external guarantor div
	$('#externalGuarantorDiv').hide();
	$("#internalGuarantorCheckbox").change(function() {
	  var isChecked = $('#internalGuarantorCheckbox').is(':checked')
	  if(isChecked){
	 	$('#internalGuarantorDiv').show();
	  	$('#externalGuarantorDiv').hide();
	  }else{
	  	$('#internalGuarantorDiv').hide();
	  	$('#externalGuarantorDiv').show();
	  }
	});
		
    $( "#smartGuarantorSearch" ).autocomplete({
    	delay: 0,
    	selectFirst: true,
        source: function(request, response){
        	//get selected office
			var sqlSearchValue = "display_name like '%" + request.term + "%'"; 
			smartSearchSuccessFunction =  function(data, textStatus, jqXHR) {
				response( $.map( data, function( item ) {
                    return {
                        label: item.displayName + "(" + item.officeName + ")",
                        value: item.displayName,
                        joinedDate: item.joinedDate,
                        id: item.id,
                        branchName:item.officeName
                    }
                }));
	  		};
			executeAjaxRequest("clients?sqlSearch=" + encodeURIComponent(sqlSearchValue), 'GET', "", smartSearchSuccessFunction, formErrorFunction);
        },
        minLength: 3,
        select: function( event, ui ) {
            $( "#selectedGuarantorName" ).val(ui.item.value);
            $( "#selectedGuarantorBranch" ).val(ui.item.branchName);
            $( "#selectedGuarantorJoinedDate" ).val(custom.helperFunctions.globalDate(ui.item.joinedDate));
            $( "#selectedGuarantorIdentifier" ).val(ui.item.id);
            return false;
        }
    });
}

function refreshLoanDocuments(loanId) {
		var successFunction =  function(data, textStatus, jqXHR) {
			var crudObject = new Object();
			crudObject.crudRows = data;
			crudObject.loanId	= loanId;
			var tableHtml = $("#loanDocumentsTemplate").render(crudObject);
			$("#loanDocuments"+loanId).html(tableHtml);
			//initialize all edit/delete buttons
			var loanUrl = "loans/"+ loanId;
			var editLoanDocumentSuccessFunction = function(data, textStatus, jqXHR) {
			  	$("#dialog-form").dialog("close");
			  	refreshLoanDocuments(loanId);
			}
			$.each(crudObject.crudRows, function(i, val) {
			      $("#editloandocument" + val.id).button({icons: {
	                primary: "ui-icon-pencil"}}
	                ).click(function(e){
			      	
					var getUrl = loanUrl + '/documents/'+val.id;
					var putUrl = loanUrl + '/documents/'+val.id;
					var templateSelector = "#editLoanDocumentsFormTemplate";
					var width = 600; 
					var height = 450;
					popupDialogWithFormView(getUrl, putUrl, 'PUT', "dialog.title.loan.document.edit", templateSelector, width, height,  editLoanDocumentSuccessFunction);
				    e.preventDefault();
			      });
			      $("#deleteloandocument" + val.id).button({icons: {
	                primary: "ui-icon-circle-close"}
	            	}).click(function(e) {
					var url = loanUrl + '/documents/'+val.id;
					var width = 400; 
					var height = 225;
											
					popupConfirmationDialogAndPost(url, 'DELETE', 'dialog.title.confirmation.required', width, height, 0, editLoanDocumentSuccessFunction);
					
					e.preventDefault();
				});
				$("#downloadloandocument" + val.id).button({icons: {
	                primary: "ui-icon-arrowthickstop-1-s"}
	            	}).click(function(e) {
					var url = loanUrl + '/documents/'+val.id + '/attachment';
					executeAjaxOctetStreamDownloadRequest(url);
					e.preventDefault();
				});
			});			
			//associate event with add loan document button
			$('#addloandocument'+loanId).button({icons: {
	                primary: "ui-icon-plusthick"}
	            	}).click(function(e) {
				var getUrl = "";
				var putUrl = loanUrl + '/documents';
				var templateSelector = "#loanDocumentsFormTemplate";
				var width = 600; 
				var height = 450;
				
				var saveSuccessFunction = function(data, textStatus, jqXHR) {
				  	$("#dialog-form").dialog("close");
				  	refreshLoanDocuments(loanId);
				}
				
				popupDialogWithFormView(getUrl, putUrl, 'POST', "dialog.title.loan.document.add", templateSelector, width, height,  saveSuccessFunction);
			    e.preventDefault();
			});
		}
  		executeAjaxRequest("loans/"+ loanId + '/documents', 'GET', "", successFunction, formErrorFunction);	 
}

/* crud admin code */

	function refreshTableView(tableName) {

		var successFunction = function(data, textStatus, jqXHR) {

				var crudObject = new Object();
				crudObject.crudRows = data;
				
				if (tableName == "configuration") {
					crudObject.crudRows = data.globalConfiguration;
				}
				
				var html = $("#" + tableName + "ListTemplate").render(crudObject);
				
				if(tableName == 'prospect'){
					$("#content").html(html);	
				}
				$("#listplaceholder").html(html);  

				if (tableName == "permission") jQuery.MifosXPermissions.addViewPermissionsTabs(data, "#permissionsDiv");

				$("a.enableconfiguration").click( function(e) {
					
					var linkId = this.id;
					var configName = linkId.replace("enableconfiguration-", "");
					var resourceUrl = "configurations?" + configName + "=true";
					
					var width = 400; 
					var height = 150;
					var saveSuccessFunction = function(data, textStatus, jqXHR) {
					  	$("#dialog-form").dialog("close");
					  	refreshTableView(tableName);
					};
					popupConfirmationDialogAndPost(resourceUrl, 'PUT', 'dialog.title.confirmation.required', width, height, configName, saveSuccessFunction);
				
					e.preventDefault();
				});

				$("a.disableconfiguration").click( function(e) {
					var linkId = this.id;
					var configName = linkId.replace("disableconfiguration-", "");
					var resourceUrl = "configurations?" + configName + "=false";
					
					var width = 400; 
					var height = 150;
					var saveSuccessFunction = function(data, textStatus, jqXHR) {
					  	$("#dialog-form").dialog("close");
					  	refreshTableView(tableName);
					};
					popupConfirmationDialogAndPost(resourceUrl, 'PUT', 'dialog.title.confirmation.required', width, height, configName, saveSuccessFunction);
				
					e.preventDefault();
				});
								
				//#Add/Edit Code Values
                $("a.editcodevalue").click( function(e) {
                    var linkId = this.id;
                    editCodeValueFunction(linkId, tableName);
                    e.preventDefault();
                });

				/*$("a.edit" + tableName).click( function(e) {
					var linkId = this.id;
					var entityId = linkId.replace("edit" + tableName, "");

					var resourceUrl = tableName + "s/" + entityId;
					
					if(tableName == 'chargecode'){
						resourceUrl = "chargecode" + "/" + entityId;
					}
					if(tableName == 'taxmap'){
						resourceUrl = 'taxmap' + '/' + entityId;
					}
					if(tableName == 'employee'){
						resourceUrl = "staff" + "/" + entityId;
					}
					if (tableName == 'report') {
						launchReportDialog(entityId);
					}
					else {
						maintainTable(tableName, resourceUrl, 'PUT');
					}
					e.preventDefault();
				});*/
                $("a.edit" + tableName).click(function(e) {
        			var linkId = this.id;
        			var entityId = linkId.replace("edit" + tableName, "");
                         
        			var resourceUrl = tableName + "s/" + entityId;
        			if(tableName == 'chargecode'){
        				resourceUrl = "chargecode" + "/" + entityId;
        			}
        			if(tableName == 'taxmap'){
        				resourceUrl = 'taxmap' + '/' + entityId;
        			}
        			if (tableName == 'employee') {
        				resourceUrl = "staff" + "/" + entityId;
        			}
        			if (tableName == 'report') {
        				launchReportDialog(entityId);
        			} else {
        				maintainTable(tableName, resourceUrl, 'PUT');
        			}
        			e.preventDefault();
        		});


				$("a.permissions" + tableName).click( function(e) {
					var linkId = this.id;
					var entityId = linkId.replace("permissions" + tableName, "");
					var resourceUrl = tableName + "s/" + entityId + "/permissions";
					maintainTable(tableName, resourceUrl, 'PUT');
					e.preventDefault();
				});


				$("a.delete" + tableName).click( function(e) {
					
					if (tableName === 'savingproduct' ||tableName === 'depositproduct' || tableName ==='charge' || tableName ==='user' || tableName == 'code' || tableName == 'officetransaction'|| tableName == 'report'
						|| tableName === 'item' || tableName === 'subscription' || tableName === 'countrycurrency' || tableName === 'region' || tableName === 'discount') {
						var linkId = this.id;
						var entityId = linkId.replace("delete" + tableName, "");

						var resourceUrl = tableName + "s/" + entityId;
						var width = 400; 
						var height = 150;
						var saveSuccessFunction = function(data, textStatus, jqXHR) {
						  	$("#dialog-form").dialog("close");
						  	refreshTableView(tableName);
						};
						popupConfirmationDialogAndPost(resourceUrl, 'DELETE', 'dialog.title.confirmation.required', width, height, entityId, saveSuccessFunction);
					} else {
						showNotAvailableDialog('dialog.title.functionality.not.available');	
					}
					
					e.preventDefault();
				});
				
				$("a.deactivate"  + tableName).click( function(e) {
					showNotAvailableDialog('dialog.title.functionality.not.available');
					e.preventDefault();
				});
				
				$("a.changepassword"  + tableName).click( function(e) {
					var linkId = this.id;
					var entityId = linkId.replace("changepassword" + tableName, "");
					
					if (tableName ==='user') {
						var putUrl = 'users/' + entityId;
						var templateSelector = "#changePasswordFormTemplate";
						var width = 600; 
						var height = 350;
						
						var saveSuccessFunction = function(data, textStatus, jqXHR) {
							$("#dialog-form").dialog("close");
							if (currentUser == entityId) resetBasicAuthKey(false);
						}
						
						popupDialogWithPostOnlyFormView(putUrl, 'PUT', 'dialog.title.update.password', templateSelector, width, height, saveSuccessFunction, 0, 0, 0);
					}
					e.preventDefault();
				});

				$("a.deregister" + tableName).click( function(e) {
					
						var linkId = this.id;
						var entityId = linkId.replace("deregister" + tableName, "");

						var resourceUrl = tableName + "s/deregister/" + entityId;
						var width = 400; 
						var height = 150;
						var saveSuccessFunction = function(data, textStatus, jqXHR) {
						  	$("#dialog-form").dialog("close");
						  	refreshTableView(tableName);
						};
						popupConfirmationDialogAndPost(resourceUrl, 'POST', 'dialog.title.confirmation.required', width, height, entityId, saveSuccessFunction);
					
						e.preventDefault();
				});

				$("a.bulkloanreassignment").click(function(e){

					var officeId = $(this).attr("data-officeid");
					var fromLoanOfficerId = $(this).attr("data-fromloanofficerid");
					var getUrl = "loans/loanreassignment/template?officeId="+officeId+"&fromLoanOfficerId="+fromLoanOfficerId;
					var postUrl = "loans/loanreassignment";

					var saveSuccessFunction = function(data, textStatus, jqXHR) {
					  	$("#dialog-form").dialog("close");
					  	refreshTableView("employee");
					};

					popupDialogWithFormView(getUrl, postUrl, "POST", "bulkLoanReassignment", "#bulkLoanReassignmentFormTemplate", crudData["bulkLoanReassignment"].dialogWidth, crudData["bulkLoanReassignment"].dialogHeight, saveSuccessFunction); 

					e.preventDefault();
				})

				
				
				var oTable;
				if (tableName == "report") oTable= displayEnhancedListTable(tableName + "stable")
				else oTable = displayListTable(tableName + "stable");
				
			  };
		if (tableName=="eventmaster") {
			executeAjaxRequest(tableName, 'GET', "", successFunction, formErrorFunction);
		} else if(tableName=="employee"){
			executeAjaxRequest('staff', 'GET', "", successFunction, formErrorFunction);
		} else if (tableName == "chargecode") {
			executeAjaxRequest(tableName, 'GET', "", successFunction,
					formErrorFunction);
		} 
		
			else if (tableName == "taxmap") {
				executeAjaxRequest(tableName, 'GET', "", successFunction,
						formErrorFunction);
		} else{
  			executeAjaxRequest(tableName + 's', 'GET', "", successFunction, formErrorFunction);
  		}
	}
	

	function maintainTable(tableName, resourceUrl, submitType, putPostQuery) {
	//	alert(tableName + " - " + resourceUrl + " - " + submitType + " - " +  putPostQuery)
		if (!(submitType == "PUT" || submitType == "POST"))
		{
			alert("System Error - Invalid submitType: " + submitType);
			return;
		}

		var templateSelector = "#" + tableName + "FormTemplate";

		var dialogTitle = "dialog.title." + tableName + ".details";
		if (submitType == "POST") dialogTitle = 'dialog.title.add.' + tableName;

		var dialogWidth = crudData[tableName].dialogWidth;
		var dialogHeight = crudData[tableName].dialogHeight;
		if (dialogWidth == undefined) dialogWidth = custom.fitPopupWidth();
		if (dialogHeight == undefined) dialogHeight = custom.fitPopupHeight();
		
		var genSSF = 'var saveSuccessFunction = function(data, textStatus, jqXHR) {';
		genSSF += '$("#dialog-form").dialog("close");';
		if (crudData[tableName].refreshListNeeded == true) genSSF += 'refreshTableView("' + tableName + '");';
		genSSF += '}';
		eval(genSSF);
		
//datatable specific code
		if (tableName == "datatable") 
		{
			dialogTitle = 'dialog.title.register.datatable';
			popupRegisterDatatableDialog('dialog.title.register.datatable', templateSelector, dialogWidth, dialogHeight, saveSuccessFunction, 0, 0, 0);
			return false;
		}
//end datatable specific code

		if (resourceUrl.indexOf("/permissions") > -1) 
		{
			templateSelector = "#rolePermissionsFormTemplate";
			dialogTitle = "dialog.title.role.permissions.details";

			dialogWidth = 1200;
			dialogHeight = 500;
		}

		if (resourceUrl.indexOf("makerCheckerable") > -1) 
		{//configure maker-checker on maintenance permissions
				dialogTitle = "dialog.title.maintainMC.details";
		}

		var getUrl = ''; 
		var putPostUrl = resourceUrl;
		if (putPostQuery > "") putPostUrl += "?" + putPostQuery;

		if (submitType == "POST") 
		{
			if (crudData[tableName].editTemplateNeeded == true) //needs to read data to populate dialog form
			{
				if(tableName== "employee"){
					getUrl = "offices" 
				}else{
					getUrl = resourceUrl + '/template';
				}
				popupDialogWithFormView(getUrl, putPostUrl, submitType, dialogTitle, templateSelector, dialogWidth, dialogHeight, saveSuccessFunction);
			}
			else popupDialogWithPostOnlyFormView(putPostUrl, submitType, dialogTitle, templateSelector, dialogWidth, dialogHeight, saveSuccessFunction, 0, 0, 0);
		}
		else
		{
			if (crudData[tableName].editTemplateNeeded == true){
				getUrl = resourceUrl + '?template=true';
				if(tableName == 'chargecode'){
					getUrl = resourceUrl;	
				} if(tableName == 'taxmap'){
					getUrl = resourceUrl;
				}
			} else{
				getUrl = resourceUrl;
			}
				
			
			popupDialogWithFormView(getUrl, putPostUrl, submitType, dialogTitle, templateSelector, dialogWidth, dialogHeight, saveSuccessFunction);
		}
		
	}


function launchReportDialog(reportId) {
	if (reportId) {
		executeAjaxRequest('reports/' + reportId + '?template=true', 'GET', "", launchReportDialogOnSuccessFunction, formErrorFunction);
	} else {
		executeAjaxRequest('reports/template', 'GET', "", launchReportDialogOnSuccessFunction, formErrorFunction);
	}
}

function submitTabbedReport(divContainer, id) {
	
	var serializationOptions = {};
	serializationOptions["checkboxesAsBools"] = true;
	
	var serializedArray = {};
	serializedArray = $('#entityform').serializeObject(serializationOptions);
	var newFormData = JSON.stringify(serializedArray);
	
	var successFunction =  function(data, textStatus, jqXHR) {
		divContainer.dialog("close");
		refreshTableView("report");
	};
	
	if (id) {
		executeAjaxRequest('reports/' + id, "PUT", newFormData, successFunction, formErrorFunction);
	} else {
		executeAjaxRequest('reports', "POST", newFormData, successFunction, formErrorFunction);
	}
}

var launchReportDialogOnSuccessFunction = function(data, textStatus, jqXHR) {
	var dialogDiv = $("<div id='dialog-form'></div>");
	var saveButton = doI18N('dialog.button.save');
	var cancelButton = doI18N('dialog.button.cancel');
	
	var buttonsOpts = {};
	buttonsOpts[saveButton] = function() {
		submitTabbedReport(dialogDiv, data.id);
	};
	// end of buttonsOpts for save button
	
	buttonsOpts[cancelButton] = function() {$(this).dialog( "close" );};
	 
	var titleCode = 'dialog.title.add.report';
	if (data.id){
		titleCode = 'dialog.title.report.details';
	}	
	
	dialogDiv.dialog({
	  		title: doI18N(titleCode), 
	  		width: dialogWidth = custom.fitPopupWidth(), 
	  		height: dialogHeight = custom.fitPopupHeight(), 
	  		modal: true,
	  		buttons: buttonsOpts,
	  		close: function() {
	  			// if i dont do this, theres a problem with errors being appended to dialog view second time round
	  			$(this).remove();
			},
	  		open: function (event, ui) {
	  			
	  			var formHtml = $("#reportFormTemplate").render(data);
	  			dialogDiv.html(formHtml);
	  			$( "#reportMaintenanceTabs").tabs();
  				
				var reportParameterIndex = 0;
				if(undefined === data.reportParameters || data.reportParameters === null) {
					reportParameterIndex = 0;
				} else {
					reportParameterIndex = data["reportParameters"].length;
				}
				
				$("#reportParameter-add").button({icons: {primary: "ui-icon-circle-plus"}}).click(function(e) {
					
					var parameterId = $('#reportParameterOptions option:selected').val();

					if (parameterId && undefined != parameterId && parameterId > 0) {
					
						var parameterName = $('#reportParameterOptions option:selected').text();
						reportParameterIndex++;
					
						var newRowTemplateData = {};
						newRowTemplateData["index"] = reportParameterIndex;
						newRowTemplateData["parameterId"] = parameterId;
						newRowTemplateData["parameterName"] = parameterName;
						var html = $("#AddReportParameterRowTemplate").render(newRowTemplateData);
						$("#reportparameterstable tbody").append(html);
				  									
						$('#reportparameterstable tbody tr:last .reportParameters-remove').button({icons: {primary: "ui-icon-trash"},text: false}).click(function(e) {
								$(this).closest('tr').remove();
			            		e.preventDefault();
						});
					
					}
				    e.preventDefault();
				});
				
				if(undefined === data.reportParameters || data.reportParameters === null) {
					// do nothing
				} else {
					 $("#reportparameterstable tbody tr .reportParameters-remove").each(function(index) {
						 $(this).button({icons: {primary: "ui-icon-trash"},text: false}).click(function(e) {
							$(this).closest('tr').remove();
			            	e.preventDefault();
			            });
					 });
				}
	  		}
	  	}).dialog('open');		
};
	

/* reports code */

function showILReporting(reportCategory) {
	setReportingContent("content");

//var reportingParams = {
 reportingParams = {
	RESTUrl: baseApiUrl + "runreports",
	basicAuthKey: base64,
	tenantIdentifier: tenantIdentifier,
	initialLanguage: currentCulture,
	bundleDir: "resources/stretchyreporting/mifosngbundle/",
	reportsListDiv: "myListOfReports",
	reportOutputOptionsDiv: "reportOutputOptionsDiv",
	runReportDiv: "myRunReportButton",
	clearReportDiv: "myClearReportButton",
	inputParametersDiv: "myInputParameters",
	reportOutputDiv: "myOutput",
	indianFormat: false,
	highlightMissingXlations: "N",
	loadingImg: "resources/stretchyreporting/dots64.gif",
	resValue: "resources/libs/"
};

	if (reportCategory)
	{
		reportingParams.reportQuery = 'reportCategoryList';
		reportingParams.reportQueryParams = {
									"reportCategory": reportCategory
								};
	}

	jQuery.stretchyReporting.initialise(reportingParams);

	$("#toptable").slideToggle("slow");

}

function selectNewDecimals(selectedVal) {
	if (!(selectedVal == "")) jQuery.stretchyReporting.changeDecimals(selectedVal);
}

function selectNewThousandsSep(selectedVal) {

	if (!(selectedVal == "")) 
	{

		switch(selectedVal )
		{
			case "INDIAN":
				jQuery.stretchyReporting.changeSeparator(",", ".", true);
  				break;
			case "NONE":
				jQuery.stretchyReporting.changeSeparator("", ".", false);
  				break;
			default:
				jQuery.stretchyReporting.changeSeparator(selectedVal.substr(0,1), selectedVal.substr(1,1), false);
		}
	}
}


//account settings
function showAccountSettings() {

	setAccountSettingsContent("content"); 
	$tabs = $("#tabs").tabs({
		"add": function( event, ui ) {
			$tabs.tabs('select', '#' + ui.panel.id);
		}

	});

	var errorFunction = function(jqXHR, status, errorThrown, index, anchor) {
	            $(anchor.hash).html("error occured while ajax loading.");
	        };

	var successFunction = function(data, status, xhr) {
				var tableHtml = $("#userSettingsTemplate").render(data);
				$("#settings").html(tableHtml);
				
				$('#changepassword').click(function(e) {
					var putUrl = 'users/' + currentUser;
					var templateSelector = "#changePasswordFormTemplate";
					var width = 600; 
					var height = 350;
					
					var saveSuccessFunction = function(data, textStatus, jqXHR) {
						$("#dialog-form").dialog("close");
						resetBasicAuthKey(true);
					}
					
					popupDialogWithPostOnlyFormView(putUrl, 'PUT', 'dialog.title.update.password', templateSelector, width, height, saveSuccessFunction, 0, 0, 0);
				    e.preventDefault();
				});
				
				$('#changedetails').click(function(e) {
					var getAndPutUrl = 'users/' + currentUser;
					var templateSelector = "#userSettingsFormTemplate";
					var width = 600; 
					var height = 350;
					
					var saveSuccessFunction = function(data, textStatus, jqXHR) {
						$("#dialog-form").dialog("close");
						resetBasicAuthKey(true);
					}
					
					popupDialogWithFormView(getAndPutUrl, getAndPutUrl, 'PUT', 'dialog.title.update.details', templateSelector, width, height, saveSuccessFunction);
					
				    e.preventDefault();
				});
	        };
    
	executeAjaxRequest("users/" + currentUser, 'GET', "", successFunction, errorFunction);	  
}
	


//authenticate user and set global details
function setBasicAuthKey(logonDivName, username, password) 
{ 

	base64 = "";
	currentUser = -1;
	currentUserName = "";
	currentPwd = "";
	newPassword = "";
	newUserName = "";


	var url = "authentication?username=" + username + "&password=" + password;
	var successFunction = function(data, textStatus, jqXHR) { 
					base64 = data.base64EncodedAuthenticationKey; 
					currentUser = data.userId;
					currentUserName = data.username;
					currentPwd = password;

					jQuery.MifosXUI.initialise(data.permissions, applicationProfile, tenantIdentifier, applicationMode);

					showMainContainer(logonDivName, username);
					custom.showFirstPage();
					return false;
			};

	var errorFunction = function(jqXHR, textStatus, errorThrown) {
	        			handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
					return true;
				};

	executeAjaxRequest(url, 'POST', "", successFunction, errorFunction);
}

function resetBasicAuthKey(refreshAccountSettings) 
{ 

	base64 = "";
	var usePassword = currentPwd;
	if (newPassword > "") usePassword = newPassword;
	var useUserName = currentUserName;
	if (newUserName > "") useUserName = newUserName;

	var url = "authentication?username=" + useUserName + "&password=" + usePassword;
	var successFunction = function(data, textStatus, jqXHR) { 
					base64 = data.base64EncodedAuthenticationKey; 
					currentUser = data.userId;
					currentUserName = data.username;
					currentPwd = usePassword;
					$("#displayUN").html(currentUserName);
					if (refreshAccountSettings == true) showAccountSettings();
					newPassword = "";
					newUserName = "";
					return false;
			};

	var errorFunction = function(jqXHR, textStatus, errorThrown) {
	        			handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
					return true;
				};

	executeAjaxRequest(url, 'POST', "", successFunction, errorFunction);

}


//Popups used for saving data and confirmation
function popupDialogWithReadOnlyFormView(getUrl, titleCode, templateSelector, width, height) {

	var executeGetUrlSuccessFunction = function(data, textStatus, jqXHR) {
		popupDialogWithReadOnlyFormViewData(data, titleCode, templateSelector, width, height);
  	};
  	
	if (getUrl.indexOf("/permissions") > -1) 
	{
		executeGetUrlSuccessFunction = function(data, textStatus, jqXHR) {
			popupDialogWithReadOnlyFormViewData(data, titleCode, templateSelector, width, height);
			
			// TODO - KW - need to support ability to display 'proposed changes'
			jQuery.MifosXPermissions.addRolePermissionsTabs(data, "#rolePermissionsDiv");
	  	};
	}
	
	if (getUrl == "") {
		popupDialogWithReadOnlyFormViewData("", titleCode, templateSelector, width, height);
	}
	else {
		executeAjaxRequest(getUrl, "GET", "", executeGetUrlSuccessFunction, formErrorFunction);
	}
}

function popupDialogWithReadOnlyFormViewData(data, titleCode, templateSelector, width, height)  {
	
	var dialogDiv = $("<div id='dialog-form'></div>");
	var cancelButton = doI18N('dialog.button.cancel');

	var buttonsOpts = {};
	buttonsOpts[cancelButton] = function() {$(this).dialog( "close" );};
	
	dialogDiv.dialog({
	  		title: doI18N(titleCode), 
	  		width: width, 
	  		height: height, 
	  		modal: true,
	  		buttons: buttonsOpts,
	  		close: function() {
	  			// if i dont do this, theres a problem with errors being appended to dialog view second time round
	  			
	  			$(this).remove();
			},
	  		open: function (event, ui) {
	  			var dialogDiv = $("#dialog-form");
	  			var formHtml = $(templateSelector).render(data);
	  			dialogDiv.html(formHtml);
	  		}
	  	}).dialog('open');
}

// end of readonly form view

function popupDialogWithFormView(getUrl, postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction , extraParam) {

		var successFunction = function(data, textStatus, jqXHR) {

				if(templateSelector == "#employeeFormTemplate" && submitType!= "PUT"){
					var officesObject = new Object();
			    		officesObject.crudRows = data;
					popupDialogWithFormViewData(officesObject, postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction);
				}else if(templateSelector == "#employeeFormTemplate" && submitType == "PUT") {
					templateSelector = "#employeeFormEditTemplate";
					popupDialogWithFormViewData(data, postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction);
				}
				else{
					popupDialogWithFormViewData(data, postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction);
		  		}
		  		
				// When create Client is invoked from parent group profile 
				// set  parentGroup and Office by default and make it un-editable

				if (templateSelector == "#clientFormTemplate") 
				{
					
					$(function() {	
						var data1=data.addressTemplateData.cityData;
						
					 $('#dialog-form #city').autocomplete({ 
						    	source: data1,
						    	delay: 0,
						    	selectFirst: true
					}).css('height','12px','width','50px');
					
					});
					
					$(function() {	
						var data2=data.addressTemplateData.stateData;
						    $('#dialog-form #state').autocomplete({ 
						        source: data2,
						        delay: 0,
						        selectFirst: true
						    }).css('height','12px','width','50px');;
					});
					
					$(function() {	
						var data3=data.addressTemplateData.countryData;
						    $("#dialog-form  #country").autocomplete({ 
						        source: data3,
						        delay: 0,
						        selectFirst: true
						    }).css('height','12px','width','10px');
						    });
					
					if(!(extraParam === undefined))
						{
							var officeId = jQuery.parseJSON(extraParam).officeId;
							var groupId = jQuery.parseJSON(extraParam).groupId;
							$("#officeId option[value='"+ officeId +"']").attr("selected", "selected");
							$('#officeId').prop('disabled', true);
							$('<input>').attr({type: 'hidden',id: 'officeId',name: 'officeId',value:officeId}).appendTo('#entityform');
							$('<input>').attr({type: 'hidden',id: 'groupId',name: 'groupId',value:groupId}).appendTo('#entityform');
						}	
				}
				
				

				if (templateSelector == "#centerFormTemplate") {
					if(!(extraParam === undefined)){
						var action = jQuery.parseJSON(extraParam).action;
						if(action == 'disable'){
							var office = $('.officeId');
							office.attr('disabled','disabled');
						}
					}
				}

				if (templateSelector == "#groupFormTemplate") 
				{

					// Scenario 1: For creating new group from quick link extraParam will be undefined
					// Scenario 2: For creating new group from parent group extraParam will be defined and disable selecting parent group
					// Scenario 3: For editing group extraParam will be undefined

					if(!(extraParam === undefined)){
						var centerId = jQuery.parseJSON(extraParam).parentGroupId;
						var action = jQuery.parseJSON(extraParam).action;
						$('#officeId').prop('disabled', true);
						if(!(centerId === undefined) ){
							$("#centerId option[value='"+ centerId +"']").attr("selected", "selected");
							if(action == 'disable'){
								$('#centerId').prop('disabled', true);
								$('<input>').attr({type: 'hidden',id: 'centerId',name: 'centerId',value:centerId}).appendTo('#entityform');

							}
						}	
					}
				}
				//End group create specific code
		  	};

		if (getUrl == "") popupDialogWithFormViewData("", postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction)
		else executeAjaxRequest(getUrl, "GET", "", successFunction, formErrorFunction);
}

function popupDialogWithFormViewData(data, postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction)  {

	var dialogDiv = $("<div id='dialog-form'></div>");
	var saveButton = doI18N('dialog.button.save');
	var saveAddressButton=doI18N('dialog.button.saveAddress');
	var cancelButton = doI18N('dialog.button.cancel');
	
	var serializationOptions = {};
	serializationOptions["checkboxesAsBools"] = true;
	
	var buttonsOpts = {};
	
	
	
	if (templateSelector === "#addressFormTemplate"){
		
		buttonsOpts[saveAddressButton] = function() {
		
		var serializedArray = {};
		serializedArray = $('#entityform').serializeObject(serializationOptions);
		 var id=$('#entityform #clientId').val();	 
		serializedArray["addressType"] = $('#entityform #addressType').val();	    		
	    serializedArray["addressNo"] = $('#entityform #addressNo').val();
	    serializedArray["street"] = $('#entityform #street').val();
	    serializedArray["city"] = $('#entityform #city').val();
		serializedArray["state"] = $('#entityform #state').val();
		serializedArray["country"] = $('#entityform #country').val();
		serializedArray["entityCode"] ="Enter Code";
		serializedArray["entityName"] = "Enter Name";
		serializedArray["parentEntityId"] = "-1";
		serializedArray["zipCode"] = $('#entityform #zipCode').val();
		var addressType=serializedArray["addressType"];  
		var linkId =postUrl;
	    var entityId = linkId.replace("address/", "");
		//alert(JSON.stringify(serializedArray));
		var newFormData = JSON.stringify(serializedArray);    
		if(addressType==="PRIMARY"){ 
		  $("#dialog-form").dialog("close");
		 }else{	   	     
		   var saveSuccessFunction = function(data, textStatus, jqXHR) {
		        var linkId =postUrl;
		        var entityId = linkId.replace("address/", "");	       
				$("#dialog-form").dialog("close");
				showILClient(id);
			};	
		  executeAjaxRequest("address/" + data.id, "PUT", newFormData, saveSuccessFunction, formErrorFunction);
		 }
	   }
	  }

	
		
	buttonsOpts[saveButton] = function() {
	
		$('#notSelectedClients option').each(function(i) {
			$(this).attr("selected", "selected");
		});
		$('#clientMembers option').each(function(i) {
			$(this).attr("selected", "selected");
		});
		
		$('#notSelectedCharges option').each(function(i) {
			$(this).attr("selected", "selected");
		});
		$('#charges option').each(function(i) {
			$(this).attr("selected", "selected");
		});
		
		$('#notSelectedRoles option').each(function(i) {  
			$(this).attr("selected", "selected");  
		});
		
		$('#roles option').each(function(i) {  
		   	$(this).attr("selected", "selected");  
		});
		
		$('#notSelectedItems option').each(function(i) {  
			   $(this).attr("selected", "selected");  
		});
		
		$('#selectedItems option').each(function(i) {  
			$(this).attr("selected", "selected");  
		});
		
		 $('#notSelectedservices option').each(function(i) {  
				$(this).attr("selected", "selected");  
			});

        $('#services option').each(function(i) {  
        $(this).attr("selected", "selected");  
         });
        
       
        $('#states option').each(function(i) {  
            $(this).attr("selected", "selected");  
             });
        
       /* $('#notSelectedStates option').each(function(i) {  
			$(this).attr("selected", "selected");  
		});*/
        
        $('#mediaData option').each(function(i) {  
            $(this).attr("selected", "selected");  
             });

		$('#notSelectedCurrencies option').each(function(i) {  
		    	   	$(this).attr("selected", "selected");  
		});
		
		$('#currencies option').each(function(i) {  
		   		$(this).attr("selected", "selected");  
		});
		
		if (document.changeUserSettingsForm!=undefined) {
			newUserName = document.changeUserSettingsForm.username.value;
		}
		
		var serializedArray = {};
			
		if (templateSelector === "#bulkLoanReassignmentFormTemplate"){
			serializationOptions["checkboxesAsBools"] = false; // send checkboxes values (which contain loans ids) instead of bools
		} 
		serializedArray = $('#entityform').serializeObject(serializationOptions);
		
		
		//manipulate serialized array for clients
		if (postUrl.toLowerCase().indexOf("clients") >= 0) {
			if (serializedArray["clientType"]=="1") {
				serializedArray["fullname"] = "";
			} else if (serializedArray["clientType"]=="2"){
				serializedArray["firstname"] = "";
				serializedArray["middlename"] = "";
				serializedArray["lastname"] = "";
			}
			delete serializedArray["clientType"];
		}

		 if (templateSelector === "#orderFormTemplate"){
	    		serializedArray = $('#entityform').serializeObject(serializationOptions);
	    		serializedArray["paytermCode"] = $('#paytermCode').val();
	    		serializedArray["start_date"] =$('#start_date').val();
	    		serializedArray["contractPeriod"] =$("#contractPeriod").val();
	    		
			}	
		 if (templateSelector === "#countrycurrencyFormTemplate"){
				
				serializedArray = $('#entityform').serializeObject(serializationOptions);
				serializedArray["country"] = $('#entityform #country').val();	    		
			    serializedArray["currency"] = $('#entityform #currency').val();
			    serializedArray["status"] = $('#entityform #status').val();
			   
			
			  }
		 
		 if (templateSelector === "#oneTimeSaleFormTemplate"){
	    		serializedArray = $('#entityform').serializeObject(serializationOptions);
	    		serializedArray["chargeCode"] = $('#chargeCode').val();
	    		serializedArray["itemId"] =$('#itemId').val();
	    		serializedArray["quantity"] = $('#quantity').val();
	    		serializedArray["saleDate"] =$('#saleDate').val();
	    		serializedArray["totalPrice"] = $('#totalPrice').val();
	    		serializedArray["unitPrice"] =$('#unitPrice').val();
	    		serializedArray["locale"] = $('#locale').val();
	    		serializedArray["dateFormat"] =$('#dateFormat').val();
	    		serializedArray["discountId"] =$('#discountId').val();
	    		
			}
		//manipulate serialized array for guarantors
    	if (postUrl.toLowerCase().indexOf("guarantor") >= 0){
    	   //TODO: Vishwas...var is repeated
    	   var serializedArray = {};
    	   var isChecked = $('#internalGuarantorCheckbox').is(':checked')
		   if(isChecked){
    	   	serializedArray["entityId"] = $('#selectedGuarantorIdentifier').val();
    	   	serializedArray["guarantorTypeId"] = 1;
    	   	serializedArray["clientRelationshipTypeId"] =$('#relationshipTypeIdForInternalGuarantor').val();
    	   }else{
    	   	serializedArray["clientRelationshipTypeId"] =$('#relationshipTypeIdForExternalGuarantor').val();
    	   	serializedArray["guarantorTypeId"] = 3;
    	   	serializedArray["firstname"] = $('#guarantorFirstName').val();
    	   	serializedArray["lastname"] = $('#guarantorLastName').val();
    	   	serializedArray["dob"] = $('#guarantorDateOfBirth').val();
    	   	serializedArray["addressLine1"] = $('#guarantorAddressLine1').val();
    	   	serializedArray["addressLine2"] = $('#guarantorAddressLine2').val();
    	   	serializedArray["city"] = $('#guarantorCity').val();
    	   	serializedArray["zip"] = $('#guarantorZip').val();
    	   	serializedArray["mobileNumber"] = $('#guarantorMobileNumber').val();
    	   	serializedArray["housePhoneNumber"] = $('#guarantorHouseNumber').val();
    	   	serializedArray["locale"] = $('#locale').val();
    	   	serializedArray["dateFormat"] = $('#dateFormat').val();
    	   }  
    	}
    	
    	if(templateSelector == '#cancelprospectFormTemplate'){
    		serializedArray["statusRemark"] = $('#statusRemark').val();
    	}
    	
    	if(templateSelector == '#inventoryItemFormTemplate'){
    		serializedArray["itemMasterId"] = $('#itemMasterId').val();
    		serializedArray["serialNumber"] = $('#serialNumber').val();
    		serializedArray["grnId"] = $('#grnId').val();
    		serializedArray["provisioningSerialNumber"] = $('#provisioningSerialNumber').val();
    		serializedArray["quality"] = $('#quality').val();
    		serializedArray["status"] = $('#status').val();
    		serializedArray["warranty"] = $('#warranty').val();
    		serializedArray["remarks"] = $('#remarks').val();
    		serializedArray["locale"] = $('#locale').val();
    		//serializedArray["lastMofdifiedById"] = $('#lastModifiedById').val();
    		if($('#provisioningSerialNumber').val()=="" | $('#provisioningSerialNumber').val()==" ")
    			serializedArray["provisioningSerialNumber"] = $('#serialNumber').val();
    		
   
    	}if(templateSelector == '#regionFormTemplate'){
    		serializedArray["regionCode"] = $('#regionCode').val();
    		serializedArray["regionName"] = $('#regionName').val();
    		serializedArray["countryId"] = $('#countryId').val();
    		serializedArray["states"] =  $('#states').val() ||new Array();
    		if ($('#all').is(':checked')) {
    			serializedArray["states"] = ['0'];
    		}
    		
    	}if(templateSelector == '#itemFormTemplate'){
    		serializedArray["chargeCode"] = $('#chargeCode').val();
    		serializedArray["itemClass"] = $('#itemClass').val();
    		serializedArray["itemCode"] = $('#itemCode').val();
    		serializedArray["itemDescription"] = $('#itemDescription').val();
    		serializedArray["unitPrice"] = $('#unitPrice').val();
    		serializedArray["units"] = $('#units').val();
    		serializedArray["warranty"] = $('#warranty').val();
    		
    		serializedArray["locale"] = $('#locale').val();
    		   
    	}
    	
    	 if(templateSelector == '#inventoryGrnFormTemplate'){
    		serializedArray["itemMasterId"] = $('#itemMasterId').val();
    		serializedArray["purchaseDate"] = $('#purchaseDate').val();
    		serializedArray["supplierId"] = $('#supplierId').val();
    		serializedArray["officeId"] = $('#officeId').val();
    		serializedArray["orderdQuantity"] = $('#orderdQuantity').val();
    		serializedArray["locale"] = $('#locale').val();
    		serializedArray["dateFormat"] = $('#dateFormat').val();
    	} 	
    	 if(templateSelector == "#ownedhardwareFormTemplate"){
     		serializedArray["serialNumber"] = $('#serialNumber').val();
     		serializedArray["provisioningSerialNumber"] = $('#provisioningSerialNumber').val();
     		if($('#provisioningSerialNumber').val() == "" | $('#provisioningSerialNumber').val() == " ")
     			serializedArray["provisioningSerialNumber"] = $('#serialNumber').val();
     		
     		serializedArray["allocationDate"] = $('#allocationDate').val();
     		serializedArray["status"] = $('#status').val();
     		serializedArray["itemType"] = $('#itemType').val();
     		serializedArray["locale"] = $('#locale').val();
     		serializedArray["dateFormat"] = $('#dateFormat').val();
     	}
    	 
    	 if(templateSelector == "#MRNDetailsFormTemplate"){
     		
    		 var date = new Date();
    		serializedArray["requestedDate"] = $('#requestedDate').val(); 		
    		serializedArray["requestedTime"] = " "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    		serializedArray["fromOffice"] = $('#fromOffice').val();
    		serializedArray["toOffice"] = $('#toOffice').val();
    		serializedArray["orderdQuantity"] = $('#orderdQuantity').val();
    		serializedArray["locale"] = $("#locale").val();
    		serializedArray["dateFormat"] = $("#dateFormat").val();
    		serializedArray["itemDescription"] = $("#itemDescription").val();
    		
    	 }
    	 
    	 if(templateSelector == "#ticketmasterFormTemplate"){
    		 var date = new Date();
        	 serializedArray["ticketDate"] = $('#startDate').val()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(); 
    	 }
    	 
    	 if(templateSelector == "#MRNDetailsMoveFormTemplate"){
      		
     		var date = new Date();
     		postUrl = "mrn/movemrn"
     		serializedArray["movedDate"] = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
     		serializedArray["mrnId"] = $('#mrnId').val();
     		serializedArray["serialNumber"] = $('#serialNumber').val();
     		serializedArray["locale"] = $("#locale").val();
     		
     	 }
    	 
    	 if(templateSelector == "#supplierFormTemplate"){
      		
     		serializedArray["supplierCode"] = $('#supplierCode').val();
     		serializedArray["supplierDescription"] = $('#supplierDescription').val();
     		serializedArray["supplierAddress"] = $('#supplierAddress').val();
     		
     	 }
    	
    	
    	//manipulate serialized array for journal entries
    	if (postUrl.toLowerCase().indexOf("journalentries") >= 0){
    		serializedArray = {};
			serializedArray["locale"] = $('#locale').val();
    	   	serializedArray["dateFormat"] = $('#dateFormat').val();
    	   	serializedArray["officeId"] = $('#officeId').val();
    	   	serializedArray["transactionDate"] = $('#transactionDate').val();
    	   	serializedArray["referenceNumber"] = $('#referenceNumber').val();	
			serializedArray["comments"] = $('#comments').val();	
    	   	//populate debits and credits array
    	   	var populateCreditOrDebitArray = function(type){
    	   		serializedArray[type] = new Array();
    	   		$("#" + type).children('p').each(function (i) {
    	   		// "this" is the current element in the loop
    	   		var tempObject= new Object();
			    $(this).children('label').each(function(j){
			    	if(j==0){
			    		//for property of label had Id of glAccount selectbox
			    		tempObject.glAccountId=$("#"+$(this).attr("for")).val();
			    	}else{
			    		//for property of label had Id of amount input
			    		tempObject.amount=$("#"+$(this).attr("for")).val();;
			    	}
			    }); 
			    serializedArray[type][i]=tempObject;
				});
    	   	}
    	   	populateCreditOrDebitArray("debits");
			populateCreditOrDebitArray("credits");
		}
	
	   //Caledar form data
        if (postUrl.toLowerCase().indexOf("calendars") > 0){
            
            var rrule = convertToRfc5545();
            serializedArray = {};
            serializedArray["locale"] = $('#locale').val();
            serializedArray["dateFormat"] = $('#dateFormat').val();
            serializedArray["title"] = $('#title').val();
            serializedArray["description"] = $('#description').val();
            serializedArray["typeId"] = $('#meetingTypeId').val();
            serializedArray["startDate"] = $('#startDate').val();
            serializedArray["repeating"] = $('#repeating').val()==="on"?true:false;
            serializedArray["recurrence"] = rrule;
            
            if($('input:checkbox[name=repeating]').is(':checked')){
                if($('#endson').is(':checked')){
                    serializedArray["endDate"] = $('#endondate').val();
                }
            }

            if($('#meetingTypeId').val() != "1"){
            	serializedArray["location"] = $('#location').val();
            	serializedArray["duration"] = $('#duration').val();
	            serializedArray["remindById"] = $('#remindById').val();
	            serializedArray["firstReminder"] = $('#firstReminder').val();
	            serializedArray["secondReminder"] = $('#secondReminder').val();
            }
            
        }
	
		
		var newFormData = JSON.stringify(serializedArray);
		if (postUrl.toLowerCase().indexOf("permissions") > -1) {
			var permissions = {};
			permissions.permissions = serializedArray;
			newFormData = JSON.stringify(permissions);
		}
	     
		if(templateSelector == '#allocateHardwareFormListTemplate'){/*
    		
			
    		serializedArray = {};//"orderId","clientId","itemMasterId","serialNumber","allocationDate","status"
    		
    		
    		var i=1;
    		var serialData = '';
    		var serialnum=$('select[name="serialNumber"] option:selected').text();
    	//	alert(serialnum);
    		for(;i<=quantityForOneTimeSale;i++){
    			serializedArray["serialNumber"] =$('#serial'+i).val();
    		//	alert($('#serial'+i).val());
        		serializedArray["orderId"] = oneTimeSaleIdForOrderId;
        		serializedArray["clientId"] = clientIdForOneTimesale;
        		serializedArray["status"] = "allocated";
        		serializedArray["itemMasterId"] = $("#itemMasterId").val();
        		var newFormData = JSON.stringify(serializedArray);
        		
        	executeAjaxRequest(postUrl, submitType, newFormData, null, formErrorFunction);
        		
    		}
    		
    		
    		
    	*/

    		
			
    		serializedArray = {};//"orderId","clientId","itemMasterId","serialNumber","allocationDate","status"
    		
    		
    		var i=1;
    		var serialData = '';
    		
    		var allocateArray	 = new Array();
    		
    		
    		
    		for(;i<=quantityForOneTimeSale;i++){
    			var serArray = {};
    			serArray["serialNumber"] = $("#serialNumber"+i).val();
    			serArray["orderId"] = oneTimeSaleIdForOrderId;
    			serArray["clientId"] = clientIdForOneTimesale;
    			serArray["status"] = "allocated";
    			serArray["itemMasterId"] = $("#itemMasterId").val();
        		
        		allocateArray.push(serArray); 
        		serArray=null;
    		}
    		
    		serializedArray["serialNumber"] = allocateArray;
    		newFormData = JSON.stringify(serializedArray);
    		
    	
		}
		
		if(templateSelector == "#prospectFormTemplate"){/*
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			var email = $("#email").val();
			
			var mobileNumberReg = /^\d{10}$/;
			var mobileNumber = $("#mobileNumber").val();
			
			var homePhoneNumber = $("#homePhoneNumber").val();
			var workPhoneNumber = $("#workPhoneNumber").val();
			
			
			var zipCodeReg = /^\d{6}$/;
			var zipCode = $("#zipCode").val();
			
			if(!zipCodeReg.test(zipCode)){
				//$("#zipCode").css('border',"2px solid red");
				$("#dialog-form #entityform #zipCode").addClass("ui-state-error");
					return false;
			  	}else{
			  		$("#dialog-form #entityform #zipCode").removeClass("ui-state-error");
			  		
			  	}	
			if(!mobileNumberReg.test(homePhoneNumber)){
				$("#dialog-form #entityform #homePhoneNumber").addClass("ui-state-error");
				return false;
			  	}else{
			  		$("#dialog-form #entityform #homePhoneNumber").removeClass("ui-state-error");
					
			  }
			if(!mobileNumberReg.test(workPhoneNumber)){
				$("#dialog-form #entityform #workPhoneNumber").addClass("ui-state-error");
					return false;
				}else{
					$("#dialog-form #entityform #workPhoneNumber").removeClass("ui-state-error");
					
				}  
			 
			 if(!mobileNumberReg.test(mobileNumber)){
				$("#dialog-form #entityform #mobileNumber").addClass("ui-state-error");
					return false;
				 }else{
					 $("#dialog-form #entityform #mobileNumber").removeClass("ui-state-error");  
				 }  
			  
			  
			  if(!emailReg.test(email) || email == undefined || email == "") {  
				 $("#dialog-form #entityform #email").addClass("ui-state-error");
				 	return false;
			  		}else{
			  			$("#dialog-form #entityform #email").removeClass("ui-state-error");
					
			  }  
			  
			   
			 
			
		*/}
		
		
	
		//$("#dialog-form").dialog("close");
		//return;
		//spl ajax req for webcam and doc upload
		if( templateSelector == '#clientImageWebcamFormTemplate'){
			var imageCanvas = $('#imageCanvas')[0];
			var imageForUpload = imageCanvas.toDataURL("image/jpeg");
			executeAjaxRequest(postUrl, submitType, imageForUpload, saveSuccessFunction, formErrorFunction);
		}
		else if (postUrl.toLowerCase().indexOf("documents") >= 0 || postUrl.toLowerCase().indexOf("images") >= 0){
			var formData = new FormData();    
			formData.append( 'file', $('#file')[0].files[0] );
			$.each(serializedArray, function (name, val) {
		        formData.append(name, val);
		    });	
			executeMultipartUploadAjaxRequest(postUrl, submitType, formData, saveSuccessFunction, formErrorFunction);
		}else{
			
			executeAjaxRequest(postUrl, submitType, newFormData, saveSuccessFunction, formErrorFunction);
			
		}
		  
	};
	// end of buttonsOpts for save button
	if( templateSelector == '#invoceDetailsFormTemplate' ||templateSelector == '#tickethistoryFormTemplate' ||templateSelector == '#orderPriceFormListTemplate'
		 ||templateSelector == '#orderDetailsFormListTemplate' ||templateSelector == '#allocationDetailsFormListTemplate'
	     || templateSelector == '#prospecthistoryFormTemplate' || templateSelector == '#viewJobHistoryFormTemplate'){
	
		var closebutton = {};
		closebutton['Close'] = function() {$(this).dialog( "close" );};
		dialogDiv.dialog({
	  		title: doI18N(titleCode), 
	  		width: width, 
	  		height: height, 
	  		modal: true,
	  		buttons: closebutton,
	  				  		close: function() {
	  				  	
	  			// if i dont do this, theres a problem with errors being appended to dialog view second time round
	  			$(this).remove();
			},
	  		open: function (event, ui) {
	  			repopulateOpenPopupDialogWithFormViewData(data, postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction);
	  			//var oTable = displayListTable("orderstable");
	  		//	var oTable = displayListTable("orderpricetable");
	  			 $('#orderpricetable').dataTable( {
	  		        "bPaginate": false,
	  		        "bLengthChange": false,
	  		        "bFilter": false,
	  		        "bSort": false,
	  		        "bInfo": false,
	  		        "bAutoWidth": false
	  		    } );
	  			$('#generictable').dataTable( {
	  		        "bPaginate": false,
	  		        "bLengthChange": false,
	  		        "bFilter": false,
	  		        "bSort": false,
	  		        "bInfo": false,
	  		        "bAutoWidth": false
	  		    } );
	  		}
	  	}).dialog('open');
		
	}else{
	buttonsOpts[cancelButton] = function() {$(this).dialog( "close" );};

	dialogDiv.dialog({
	  		title: doI18N(titleCode), 
	  		width: width, 
	  		height: height, 
	  		modal: true,
	  		buttons: buttonsOpts,
	  		
	  		close: function() {
	  			
	    		  $(".myclass").attr("disabled", false);
	  			// if i dont do this, theres a problem with errors being appended to dialog view second time round
	  			$(this).remove();
			},
	  		open: function (event, ui) {
	  			
	  			repopulateOpenPopupDialogWithFormViewData(data, postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction);
	  		}
	  	}).dialog('open');
}
}

var quantityForOneTimeSale;
var clientIdForOneTimesale;
var oneTimeSaleIdForOrderId;

function repopulateOpenPopupDialogWithFormViewData(data, postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction){

	var dialogDiv = $("#dialog-form");
	var formHtml = "";
	switch(templateSelector)
	{
			case "#rolePermissionsFormTemplate":
				formHtml = $(templateSelector).render(data);
				dialogDiv.html(formHtml);
				jQuery.MifosXPermissions.addRolePermissionsTabs(data, "#rolePermissionsDiv");
  				break;
			case "#permissionFormTemplate":
				formHtml = $(templateSelector).render({dummy: true});
				dialogDiv.html(formHtml);
				jQuery.MifosXPermissions.maintainMakerCheckerTabs(data, "#makerCheckerPermissionsDiv");
  				break;
			default:
				formHtml = $(templateSelector).render(data);
				dialogDiv.html(formHtml);
	}

	//attaching charges to loan from popup
	$('#chargeOptions').change(function(e) {
		if ($(this).val() > 0){
			var selectChargeForLoanSuccess = function(chargeData, textStatus, jqXHR){
				var partialFormHtml = $("#loanChargeDetailsPartialFormTemplate").render(chargeData);
				$("#loanChargeDetails").html(partialFormHtml);
				$('.datepickerfieldnoconstraint').datepicker({constrainInput: true, defaultDate: 0, dateFormat: custom.datePickerDateFormat});
			}
			executeAjaxRequest("charges/" + $(this).val() + "?template=true", "GET", "", selectChargeForLoanSuccess, formErrorFunction);    	
		}
	})

	
	

		
		
	
	if (templateSelector === "#groupFormTemplate"){
		$("#dialog-form #officeId").change(function(e){
			var selectedOfficeId = $(this).val();
			var officeIdChangeSuccess = function(groupData, textStatus, jqXHR){
				groupData['officeId'] = selectedOfficeId;
				repopulateOpenPopupDialogWithFormViewData(groupData, postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction)
			}
			if (data['id']){
				executeAjaxRequest("groups/" + data['id'] + "?template=true&officeId=" + selectedOfficeId, "GET", "", officeIdChangeSuccess, formErrorFunction);	
			} else {
				executeAjaxRequest("groups/template?officeId=" + selectedOfficeId +"&levelId="+data['groupLevelData'].levelId, "GET", "", officeIdChangeSuccess, formErrorFunction);	
			}
		})
	}
	


	if (templateSelector === "#centerFormTemplate"){
		$("#dialog-form #officeId").change(function(e){
			var selectedOfficeId = $(this).val();
			var officeIdChangeSuccess = function(centerData, textStatus, jqXHR){
				centerData['officeId'] = selectedOfficeId;
				repopulateOpenPopupDialogWithFormViewData(centerData, postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction)
			}
			if (data['id']){
				executeAjaxRequest("centers/" + data['id'] + "?template=true&officeId=" + selectedOfficeId, "GET", "", officeIdChangeSuccess, formErrorFunction);	
			} else {
				executeAjaxRequest("centers/template?officeId=" + selectedOfficeId , "GET", "", officeIdChangeSuccess, formErrorFunction);	
			}
		})
	}

	if(templateSelector === "#prospectdetailFormTemplate"){
		var datetimeOptions = {
				dateFormat: 'yy-mm-dd',
				timeFormat: "HH:mm:ss",
				showSecond: true
				}

		$('#preferredCallingTime').datetimepicker(datetimeOptions);
		
			
	}
	if(templateSelector === "#prospectFormTemplate"){
		var datetimeOptions = {
				dateFormat: 'yy-mm-dd',
				timeFormat: "HH:mm:ss",
				showSecond: true
				}

		$('#preferredCallingTime').datetimepicker(datetimeOptions);
		
			
	}
	
	if(templateSelector == "#MRNDetailsFormTemplate"){
		$("#requestedDate").datepicker({dateFormat:"dd MM yy"}).datepicker("setDate",new Date());
	}


	if(templateSelector == "#ticketmasterFormTemplate"){
		$("#startDate").datepicker({dateFormat:"yy-mm-dd"}).datepicker("setDate",new Date());
	}

	if(templateSelector == "#MRNDetailsMoveFormTemplate"){
		
		$("#dialog-form #mrnId").change(function(e){
			var id = $("#dialog-form #mrnId").val();
			
			getUri='mrn/template/ids?mrnId='+id;
			var officeIdSelectSuccess = function(loanReassignmentData, textStatus, jqXHR){
				$(function() {	
					var data2=loanReassignmentData.serialNumber;
					    $("#dialog-form #serialNumber").autocomplete({ 
					        source: data2,
					        delay: 0,
					        selectFirst: true
					    });
				});
			}
			executeAjaxRequest(getUri, "GET", "", officeIdSelectSuccess, formErrorFunction);
		});
	}

	
	if (templateSelector === "#guarantorFormTemplate"){
    	loadGuarantorForm();	
	}

	if (templateSelector === "#transactionLoanFormTemplate"){
    	loadTransactionForm();
	}

	if (templateSelector === "#loanDisbursementTemplate"){
    	loadTransactionForm();
	}

	if (templateSelector === "#bulkLoanReassignmentFormTemplate"){
		$("#dialog-form #officeId").change(function(e){
			var selectedOfficeId = $("#dialog-form #officeId").val();
			withOfficeIdUrl = postUrl + "/template?officeId=" + selectedOfficeId;
			var officeIdSelectSuccess = function(loanReassignmentData, textStatus, jqXHR){
				repopulateOpenPopupDialogWithFormViewData(loanReassignmentData, postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction)
			}
			executeAjaxRequest(withOfficeIdUrl, "GET", "", officeIdSelectSuccess, formErrorFunction);
		});
		$("#dialog-form #fromLoanOfficerId").change(function(e){
			var selectedOfficeId = $("#dialog-form #officeId").val();
			var selectedFromLoanOfficerId = $("#dialog-form #fromLoanOfficerId").val();
			var withOfficeIdAndFromLoanOfficerIdUrl = postUrl  + "/template?officeId=" + selectedOfficeId + "&fromLoanOfficerId="+selectedFromLoanOfficerId+"";
			var fromLoanOfficerIdSelectSuccess = function(loanReassignmentData, textStatus, jqXHR){
				repopulateOpenPopupDialogWithFormViewData(loanReassignmentData, postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction)
			}
			executeAjaxRequest(withOfficeIdAndFromLoanOfficerIdUrl, "GET", "", fromLoanOfficerIdSelectSuccess, formErrorFunction); 
		});
		$("input[type='checkbox']").click(function(){ // checkboxes hierarchy handler
			if ($(this).is("[data-id]")){
				var isChecked = $(this).is(":checked");
				$("input[data-parentid='"+$(this).attr("data-id")+"']").prop("checked", isChecked);
			} else {
				if( $("input[data-parentid='"+$(this).attr("data-parentid")+"']").filter(':not(:checked)').length === 0){
					$("input[data-id='"+$(this).attr("data-parentid")+"']").prop("checked", true);
				} else {
					$("input[data-id='"+$(this).attr("data-parentid")+"']").prop("checked", false);
				}			
			}
		})
	}

	if (templateSelector === "#clientFormTemplate" || templateSelector === "#editClientFormTemplate") {

		//onchange events for radio button clientType
		$("input[name='clientType']").change(function() {
	  		var selectedValue = $(this).val();
	  		if (selectedValue == "1"){
	  		    $("#individualRow").show();
	  		   	$("#businessRow").hide();
			}else if (selectedValue == "2"){
				$("#individualRow").hide();
				$("#businessRow").show()
			}
		});
		
		

		if (!(data.fullname == undefined)) {
			$("#individualRow").hide();
	  		$("#businessRow").show();
		} else {
			$("#individualRow").show();
	  		$("#businessRow").hide();
		}
	}

	if (templateSelector === "#chargeFormTemplate") {
		$("#chargeCalculationType").change(function() {
			var selectedValue = $(this).val();
	  		if (selectedValue == "1"){
	  			$("label[for='amount']").text(doI18N('label.amount'));
			}else if (selectedValue == "2"){
				$("label[for='amount']").text(doI18N('label.percentage'));
			}
		});

		if(data.chargeCalculationType.id == "1") {
			$("label[for='amount']").text(doI18N('label.amount'));
		} else if (data.chargeCalculationType.id == "2") {
			$("label[for='amount']").text(doI18N('label.percentage'));
		}
	}

if (templateSelector === "#oneTimeSaleFormTemplate"){
		
	
		$("#dialog-form #itemId").change(function(e){
		var itemId = $("#dialog-form #itemId").val();
		getUri='onetimesales/'+itemId+'/item';
		var officeIdSelectSuccess = function(loanReassignmentData, textStatus, jqXHR){
			repopulateOpenPopupDialogWithFormViewData(loanReassignmentData, postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction)
		}
		executeAjaxRequest(getUri, "GET", "", officeIdSelectSuccess, formErrorFunction);
	});
		
		$("#dialog-form #quantity").change(function(e){
			var itemId = $("#dialog-form #itemId").val();
			var quantity = $("#dialog-form #quantity").val();
			var itemprice = $("#dialog-form #unitPrice").val();
			serializedArray = {};
			serializedArray["quantity"] = $('#quantity').val();
    	   	serializedArray["unitPrice"] = $('#unitPrice').val();
    	    serializedArray["locale"] = $('#locale').val();    	   	
    	   	var newFormData = JSON.stringify(serializedArray);
			getUri='onetimesales/'+itemId+'/totalprice?quantity='+quantity;
			var officeIdSelectSuccess = function(loanReassignmentData, textStatus, jqXHR){
				repopulateOpenPopupDialogWithFormViewData(loanReassignmentData, postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction)
			}
			executeAjaxRequest(getUri, "POST", newFormData, officeIdSelectSuccess, formErrorFunction);
			//executeAjaxRequest(getUri, "POST", newFormData, officeIdSelectSuccess, formErrorFunction);
		});
	}

if (templateSelector === "#regionFormTemplate"){
	
	$("#dialog-form #countryId").change(function(e){
		var regionCode = $("#dialog-form #regionCode").val();
		var regionName = $("#dialog-form #regionName").val();
		var countryId = $("#dialog-form #countryId").val();
		serializedArray = {};
		serializedArray["regionCode"] = $('#regionCode').val();
	   	serializedArray["regionName"] = $('#regionName').val();
	   	var newFormData = JSON.stringify(serializedArray);
		getUri='regions/getstates/'+countryId;
		var officeIdSelectSuccess = function(loanReassignmentData, textStatus, jqXHR){
			repopulateOpenPopupDialogWithFormViewData(loanReassignmentData, postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction)
		}
		executeAjaxRequest(getUri, "POST", newFormData, officeIdSelectSuccess, formErrorFunction);
		//executeAjaxRequest(getUri, "POST", newFormData, officeIdSelectSuccess, formErrorFunction);
	});
	
	
	
}

if(templateSelector == "#paymentFormTemplate"){
	  $('.cheque_class').each(function(){
	    $(this).hide();
	  });
	  $('#isChequeSelected').val("no");
	
	
	
	  $('#paymentCode').change(function(){
	  var sVal = $("#paymentCode option:selected").text();
	  if(sVal == "Cheque"){
		$('.cheque_class').each(function(){
		$(this).show();
	      
	  });
	  $('#isChequeSelected').val("yes");
	  }else{
		$('.cheque_class').each(function(){
		  $(this).hide();
		});
		$('#isChequeSelected').val("no");
	
	  }
	  });
}

if(templateSelector == "#allocateHardwareFormListTemplate"){
	
	var quantity = data.quantity;
	var itemMasterId = data.itemMasterId;
	quantityForOneTimeSale = quantity;
	

	var i=1;
	for(;i<=quantity;i++){ 
		
		var comboId='serialNumber'+i;
		
	
		 var combo = $("<select></select>").attr("id",comboId).attr("name", "serialNumber"+i);
	$(data.serials).each(function(index, item) {
		 $(combo).append($("<option>").val('').text(''));
		 $(combo).append($("<option>").val(item).text(item));
    });
	
	var tr = $("<tr></tr>");
	var td = $("<td></td>");
	td.append(combo);
	tr.append(td);
	
	$("table #appendSerialNumberInputField").append(tr);
	$('#'+comboId).combobox();
	}
	
	$(function() {	
	var data1=data.serials;
	
	i=1;
	for(;i<=quantity;i++){
		 $("#serialNumber"+i).autocomplete({ 
		    	source: data1,
		    	delay: 0,
		    	selectFirst: true
	}).css('height','12px','width','50px');
	}
	
	
	});
	
	
	
}

if (templateSelector === "#inventoryItemFormTemplate"){
	
	
	var grnid = data.id;
	var getUrl='itemdetails/grn/template';
	//$('#id').find('option').remove().end().append("<option value='-1'>"+doI18N('option.grnid.first.choice')+"</option>").val("");
	var successFunction = function(data, textStatus, jqXHR){
	var newData = JSON.stringify(data);
	$(data).each(function(index,element){
		$("#id").append("<option value="+element.testId+">"+element.testId+"</option>");
	});
	$("#id option[value='"+grnid+"']").attr('selected','selected');
	}
	var errorFunction = function(jqXHR, status, errorThrown, index, anchor) {
    	handleXhrError(jqXHR, status, errorThrown, "#addressFormTemplate", "#formerrors");
	}
	executeAjaxRequest(getUrl, 'GET', '', successFunction, errorFunction);
	
	
	$("#dialog-form #id").change(function(e){
	var id = $("#dialog-form #id").val();
	getUri='itemdetails/template?grnId='+id;
	var officeIdSelectSuccess = function(loanReassignmentData, textStatus, jqXHR){
		//$("#dialog-form #id option[value='"+data.resourceId+"']").attr('selected','selected');
		
		$("#id").val(loanReassignmentData.id);
		$('.itemMasterId').val(loanReassignmentData.itemMasterId);
		$('#itemDescription').val(loanReassignmentData.itemDescription);
		$('#grnId').val(loanReassignmentData.id);
		$('#purchaseDate').val(custom.helperFunctions.globalDate(loanReassignmentData.purchaseDate));
		$('.orderdQuantity').val(loanReassignmentData.orderdQuantity);
		$('#receivedQuantity').val(loanReassignmentData.receivedQuantity);
		$('#supplierId').val(loanReassignmentData.supplierId);
		$('#supplierName').val(loanReassignmentData.supplierName);
	}
	executeAjaxRequest(getUri, "GET", "", officeIdSelectSuccess, formErrorFunction);
});
	
	
}

$("#isPrepaid").click(function () {
	if (this.checked){
		$("#allowTopup").show();
		$('label[for="allowtopup"]').show();
		$("#duration").show();
		$('label[for="duration"]').show();
		$("#volume").show();
		$("#units").show();
		$('label[for="volume"]').show();
	}else{
		$("#allowTopup").hide();
		$('label[for="allowtopup"]').hide();
		$("#duration").hide();
		$('label[for="duration"]').hide();
		$("#volume").hide();
		$("#units").hide();
		$('label[for="volume"]').hide();
	}
	
 
    });


$("#all").click(function () {
	
	if (this.checked){
		
	 $('#states option:selected').remove().appendTo('#notSelectedStates');  
	 $(".multiselectwidget").attr('disabled','disabled');
	 
	}else{
		
		$(".multiselectwidget").removeAttr('disabled');
	}
    });

if(templateSelector === "#prospectdetailFormTemplate"){
	var datetimeOptions = {
			dateFormat: 'yy-mm-dd',
			timeFormat: "HH:mm:ss",
			showSecond: true
			}

	$('#preferredCallingTime').datetimepicker(datetimeOptions);		
}


if(templateSelector === "#prospectFormTemplate"){
	var datetimeOptions = {
			dateFormat: 'yy-mm-dd',
			timeFormat: "HH:mm:ss",
			showSecond: true
			}

	$('#preferredCallingTime').datetimepicker(datetimeOptions);
	
		
}
if(templateSelector === "#prospectFormTemplate"){
	$(function() {	
		var data1=data.cityData;
	 		$("#dialog-form #cityDistrict").autocomplete({ 
		    	source: data1,
		    	delay: 0,
				selectFirst: true
			});
	
	});
	$(function() {	
		var data2=data.stateData;
		    $("#dialog-form #state").autocomplete({ 
		        source: data2,
		        delay: 0,
				selectFirst: true
		    });
	});
	
	$(function() {	
		var data3=data.countryData;
		    $("#dialog-form  #country").autocomplete({ 
		        source: data3,
		        delay: 0,
				selectFirst: true
		    });
	});
}

if(templateSelector === "#jobscheduleFormTemplate"){
	
	var datetimeOptions = {
			dateFormat: 'yy-mm-dd',
			timeFormat: "HH:mm:ss",
			showSecond: true
			}

	$('#scheduleTime').datetimepicker(datetimeOptions);
	
			
	
	$('#msgTemplateDescription').hide();
	$('#msgTemplateDescriptionLabel').hide();
	$("#process").change(function(){
		if($(this).val() == "Message"){
			$('#msgTemplateDescription').show();
			$('#msgTemplateDescriptionLabel').show();
		} else{
			$('#msgTemplateDescription').hide();
			$('#msgTemplateDescriptionLabel').hide();
		}
	});
}

if (templateSelector === "#orderFormTemplate"){
	
	$("#contractPeriod").find("2 Weeks").attr("selected", "selected");
}


if (templateSelector === "#regionFormTemplate"){
	
	if(data.isDefault == 'Y' ){
		$(".multiselectwidget").attr('disabled','disabled');
	}
}

if (templateSelector === "#planFormTemplate"){
	//alert("#addressFormTemplate in repopulate")
	if(data.isPrepaid == "N"){
		
	$("#allowTopup").hide();
	$('label[for="allowtopup"]').hide();
	$("#duration").hide();
	$('label[for="duration"]').hide();
	$("#volume").hide();
	$("#units").hide();
	$('label[for="volume"]').hide();
	/*$("#allowtopup").hide();
	$("#parentEntityId").hide();
	$("#addEntityData").hide();
	$("#enterNewDetails").hide();*/
	}if(data.isPrepaid == null ){
		$("#allowTopup").hide();
		$('label[for="allowtopup"]').hide();
		$("#duration").hide();
		$('label[for="duration"]').hide();
		$("#volume").hide();
		$("#units").hide();
		$('label[for="volume"]').hide();
	}
}

if (templateSelector == "#addressFormTemplate"){
	//alert("#addressFormTemplate in repopulate")
	$("#entityCode").hide();
	$("#entityName").hide();
	$("#parentEntityId").hide();
	$("#addEntityData").hide();
	$("#enterNewDetails").hide();
	
	
	

	$(function() {	
		var data1=data.cityData;
		
	 $('#dialog-form #city').autocomplete({ 
		    	source: data1,
		    	delay: 0,
		    	selectFirst: true
	}).css('height','12px','width','50px');
	
	});
	$(function() {	
		var data2=data.stateData;
		    $('#dialog-form #state').autocomplete({ 
		        source: data2,
		        delay: 0,
		        selectFirst: true
		    }).css('height','12px','width','50px');;
	});
	
	$(function() {	
		var data3=data.countryData;
		    $("#dialog-form  #country").autocomplete({ 
		        source: data3,
		        delay: 0,
		        selectFirst: true
		    }).css('height','12px','width','50px');;
	});
	
	
	
	var entityUrl = 'address/';
	var entityType='';
	$("#addNewCity").click(
			function() {

				$('#entityCode').focusin(function() {
					if (this.value == 'Enter City Code') {
						this.value = '';
					}
				}).focusout(function() {
					if (this.value == '') {
						this.value = 'Enter City Code';
					}
				});
				$('#entityName').focusin(function() {
					if (this.value == 'Enter City Name') {
						this.value = '';
					}
				}).focusout(function() {
					if (this.value == '') {
						this.value = 'Enter City Name';
					}
				});

				$("#entityCode").show();
				$("#entityName").show();
				$("#addEntityData").show();
				$("#enterNewDetails").show();
				$("#entityCode").val("Enter City Code");
				$("#entityName").val("Enter City Name");
				entityType = 'city/';
				// rahmanalert('woking-1');
				var getUrl = 'address/state';
				// rahmanalert('woking-2');
				var jsonData = '';
				// rahmanalert('woking-3');
				var verbType = 'GET';
				$('#parentEntityId')
						.find('option')
						.remove()
						.end()
						.append(
								"<option value='-1'>"
										+ doI18N('option.subscription.first.choice')
										+ "</option>").val("");
				var successFunction = function(data, textStatus,
						jqXHR) {
					var newData = JSON.stringify(data);
					// rahmanalert(newData);
					var st = "";
					$(data.datas).each(
							function(index, element) {
								$("#parentEntityId").append(
										"<option value="
												+ element.id + ">"
												+ element.data
												+ "</option>");
							});

					$("#parentEntityId").show();
				}
				var errorFunction = function(jqXHR, status,
						errorThrown, index, anchor) {
					handleXhrError(jqXHR, status, errorThrown,
							"#addressFormTemplate", "#formerrors");
				}
				// rahmanalert('woking-4');
				executeAjaxRequest(getUrl, verbType, jsonData,
						successFunction, errorFunction);
				// rahmanalert('woking');
			});
	
	$("#addNewState").click(function(){
		
		$('#entityCode')
	    .focusin(function() {
	        if ( this.value == 'Enter State Code' ) {
	            this.value = '';    
	        }
	    })
	    .focusout(function() {
	        if ( this.value == '' ) {
	            this.value = 'Enter State Code';    
	        }
	    });
		$('#entityName')
	    .focusin(function() {
	        if ( this.value == 'Enter State Name' ) {
	            this.value = '';    
	        }
	    })
	    .focusout(function() {
	        if ( this.value == '' ) {
	            this.value = 'Enter State Name';    
	        }
	    });
		
		$("#entityCode").show();
		$("#entityName").show();
		$("#parentEntityId").show();
		$("#addEntityData").show();
		$("#enterNewDetails").show();
		$("#entityCode").val("Enter State Code");
		$("#entityName").val("Enter State Name");
		
		var getUrl = 'address/country';
		entityType = 'state/';
		var jsonData = '';
		var verbType = 'GET';
		$('#parentEntityId').find('option').remove().end().append("<option value='-1'>"+doI18N('option.subscription.first.choice')+"</option>").val("");
		var successFunction = function(data, textStatus, jqXHR){
			var newData = JSON.stringify(data);
			//rahmanalert(newData);
			var st = "";
			
			
			
			$(data.datas).each(function(index,element){
				$("#parentEntityId").append("<option value="+element.id+">"+element.data+"</option>");
			});
			
			$("#parentEntityId").show();
		}
		var errorFunction = function(jqXHR, status, errorThrown, index, anchor) {
	    	handleXhrError(jqXHR, status, errorThrown, "#addressFormTemplate", "#formerrors");
		}
		executeAjaxRequest(getUrl, verbType, jsonData, successFunction, errorFunction);
	});
	
	$("#addNewCountry").click(function(){
		
		$('#entityCode')
	    .focusin(function() {
	        if ( this.value == 'Enter Country Code' ) {
	            this.value = '';    
	        }
	    })
	    .focusout(function() {
	        if ( this.value == '' ) {
	            this.value = 'Enter Country Code';    
	        }
	    });
		$('#entityName')
	    .focusin(function() {
	        if ( this.value == 'Enter Country Name' ) {
	            this.value = '';    
	        }
	    })
	    .focusout(function() {
	        if ( this.value == '' ) {
	            this.value = 'Enter Country Name';    
	        }
	    });
		
		$("#entityCode").show();
		$("#entityName").show();
		$("#addEntityData").show();
		$("#enterNewDetails").show();
		
		$("#parentEntityId").hide();
		
		$("#entityCode").val("Enter Country Code");
		$("#entityName").val("Enter Country Name");
		
		entityType = 'country/';
		$('#parentEntityId').find('option').remove().end().append("<option></option>").val("");
	});
	
	
	
	$("#addEntityData").click(function(){
			//rahmanalert($("#entityCode").val());
			//rahmanalert($("#entityName").val());
			//rahmanalert($("#parentEntityId").val());
			
			var errorFunction = function(jqXHR, status, errorThrown, index, anchor) {
				alert("Error Exist Please Re-Enter");
		    	
			}
			
			var successFunction = function(data, textStatus, jqXHR){
				$("#entityCode").hide();
				$("#entityName").hide();
				$("#parentEntityId").hide();
				$("#enterNewDetails").hide();
				$("#addEntityData").hide();
				$("#dialog-form").dialog("close");
				$('#editaddrbtn').trigger('click');
				$('#newaddbtn').trigger('click');
			/*//	$('#editaddrbtn').trigger('click');
				$('#newaddbtn').trigger('click');
				//$("#dialog-form").dialog("close");
*/			}
			serializedArray = {};
			//var jsonData = 
			var postUrl = entityUrl+entityType+'new';
			serializedArray["entityCode"] = $('#entityCode').val();
    	   	serializedArray["entityName"] = $('#entityName').val();
    	   	if(entityType=='country/'){
    	   	serializedArray["parentEntityId"] = '1';//$('#parentEntityId').val("");
    	   	}else{
    	   	serializedArray["parentEntityId"] = $('#parentEntityId').val();
    	   	}
    	   	newFormData = null;
    	   	newFormData = JSON.stringify(serializedArray);
    	   	//rahmanalert(newFormData);
    	   	
			executeAjaxRequest(postUrl, 'POST', newFormData, successFunction, errorFunction);
			
		
	});
	
}	

	$('#addclientmembers').click(function() {  
		return !$('#notSelectedClients option:selected').remove().appendTo('#clientMembers');  
	});
	$('#removeclientmembers').click(function() {  
		return !$('#clientMembers option:selected').remove().appendTo('#notSelectedClients');  
	});

	$('#addcharges').click(function() {  
		return !$('#notSelectedCharges option:selected').remove().appendTo('#charges');  
	});
	$('#removecharges').click(function() {  
		return !$('#charges option:selected').remove().appendTo('#notSelectedCharges');  
	});

	$('#addroles').click(function() {  
		return !$('#notSelectedRoles option:selected').remove().appendTo('#roles');  
	});	
	$('#removeroles').click(function() {  
		return !$('#roles option:selected').remove().appendTo('#notSelectedRoles');  
	}); 

	$('#add').click(function() {  
	     return !$('#notSelectedItems option:selected').remove().appendTo('#selectedItems');  
	});
	$('#remove').click(function() {  
		return !$('#selectedItems option:selected').remove().appendTo('#notSelectedItems');  
	});

	$('#addcurrencies').click(function() {  
		return !$('#notSelectedCurrencies option:selected').remove().appendTo('#currencies');  
	});
	$('#removecurrencies').click(function() {  
		return !$('#currencies option:selected').remove().appendTo('#notSelectedCurrencies');  
	});
	$('#addservices').click(function() {  
		return !$('#notSelectedServices option:selected').remove().appendTo('#services');  
	});	
	$('#removeservices').click(function() {  
		return !$('#services option:selected').remove().appendTo('#notSelectedServices');  
	});
	$('#addMedia').click(function() {  
		return !$('#notSelectedMedia option:selected').remove().appendTo('#mediaData');  
	});	
	$('#removeMedia').click(function() {  
		return !$('#mediaData option:selected').remove().appendTo('#notSelectedMedia');  
	});
	
	$('#addstates').click(function() {  
		return !$('#notSelectedStates option:selected').remove().appendTo('#states');  
	});	
	
	$('#removestates').click(function() {  
		return !$('#states option:selected').remove().appendTo('#notSelectedStates');  
	});

	$('.datepickerfield').datepicker({constrainInput: true, maxDate: 0, dateFormat: custom.datePickerDateFormat});
	$('.datepickerfieldnoconstraint').datepicker({constrainInput: true, defaultDate: 0, dateFormat: custom.datePickerDateFormat});
	
	$("#entityform textarea").first().focus();
	$('#entityform input').first().focus();	
}

function popupRegisterDatatableDialog(titleCode, templateSelector, width, height, saveSuccessFunction) {

var dialogDiv = $("<div id='dialog-form'></div>");
var data = new Object();
var formHtml = $(templateSelector).render(data);
dialogDiv.append(formHtml);

var saveButton = doI18N('dialog.button.save');
var cancelButton = doI18N('dialog.button.cancel');
var buttonsOpts = {};		

buttonsOpts[saveButton] = function() {
	var registerUrl = "datatables/register/" + document.registerDatatableForm.registeredTableName.value + "/" + document.registerDatatableForm.applicationTableName.value;
	
	executeAjaxRequest(registerUrl, "POST", {}, saveSuccessFunction, formErrorFunction);
};
buttonsOpts[cancelButton] = function() {
	
	$(this).dialog( "close" );};

dialogDiv.dialog({
  		title: doI18N(titleCode), 
  		width: width, 
  		height: height, 
  		modal: true,
  		buttons: buttonsOpts,
  		close: function() {
  			
  			// if i dont do this, theres a problem with errors being appended to dialog view second time round
  			$(this).remove();
  			
		},
  		open: function (event, ui) {  			
  			$("#entityform textarea").first().focus();
  			$('#entityform input').first().focus();
  		}
  }).dialog('open');
}


// used by deposit account functionality
function popupDialogWithPostOnlyFormView(postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction) {
var dialogDiv = $("<div id='dialog-form'></div>");
var data = new Object();
var formHtml = $(templateSelector).render(data);
dialogDiv.append(formHtml);

var saveButton = doI18N('dialog.button.save');
var cancelButton = doI18N('dialog.button.cancel');
var buttonsOpts = {};		
buttonsOpts[saveButton] = function() {
	$('.multiSelectedItems option').each(function(i) {  
    	   		$(this).attr("selected", "selected");  
    		});

	if (document.changePasswordForm!=undefined) newPassword = document.changePasswordForm.password.value;

	var newFormData = JSON.stringify($('#entityform').serializeObject());

	executeAjaxRequest(postUrl, submitType, newFormData, saveSuccessFunction, formErrorFunction);
};
buttonsOpts[cancelButton] = function() {
	  
	
	$(this).dialog( "close" );
	
};

dialogDiv.dialog({
  		title: doI18N(titleCode), 
  		width: width, 
  		height: height, 
  		modal: true,
  		buttons: buttonsOpts,
  		close: function() {
  		
  			// if i dont do this, theres a problem with errors being appended to dialog view second time round
  			$(this).remove();
		},
  		open: function (event, ui) {
  			$('.multiadd').click(function() {  
  			     return !$('.multiNotSelectedItems option:selected').remove().appendTo('#selectedItems');  
  			});
  			
  			$('.multiremove').click(function() {  
  				return !$('.multiSelectedItems option:selected').remove().appendTo('#notSelectedItems');  
  			});
  			
  			$('.datepickerfield').datepicker({constrainInput: true, dateFormat: custom.datePickerDateFormat});
  			
  			$("#entityform textarea").first().focus();
  			$('#entityform input').first().focus();
  		}
  }).dialog('open');
}

function popupDialogWithPostOnlyFormView(postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction, minOffset, defaultOffset, maxOffset) {
		var dialogDiv = $("<div id='dialog-form'></div>");
		var data = new Object();
		var formHtml = $(templateSelector).render(data);
		dialogDiv.append(formHtml);
		
		var saveButton = doI18N('dialog.button.save');
		var cancelButton = doI18N('dialog.button.cancel');
		var buttonsOpts = {};		
		buttonsOpts[saveButton] = function() {
			$('.multiSelectedItems option').each(function(i) {  
		    	   		$(this).attr("selected", "selected");  
		    		});

			if (document.changePasswordForm!=undefined) newPassword = document.changePasswordForm.password.value;

			var newFormData = JSON.stringify($('#entityform').serializeObject());
			executeAjaxRequest(postUrl, submitType, newFormData, saveSuccessFunction, formErrorFunction);
		};
		buttonsOpts[cancelButton] = function() {
		
			$(this).dialog( "close" );};
		
		dialogDiv.dialog({
		  		title: doI18N(titleCode), 
		  		width: width, 
		  		height: height, 
		  		modal: true,
		  		buttons: buttonsOpts,
		  		close: function() {
		  			
		  			// if i dont do this, theres a problem with errors being appended to dialog view second time round
		  			$(this).remove();
				},
		  		open: function (event, ui) {
		  			$('.multiadd').click(function() {  
		  			     return !$('.multiNotSelectedItems option:selected').remove().appendTo('#selectedItems');  
		  			});
		  			
		  			$('.multiremove').click(function() {  
		  				return !$('.multiSelectedItems option:selected').remove().appendTo('#notSelectedItems');  
		  			});
		  			
		  			$('.datepickerfield').datepicker({constrainInput: true, minDate: minOffset, defaultDate: defaultOffset, maxDate: maxOffset, dateFormat: custom.datePickerDateFormat});
		  			
		  			$("#entityform textarea").first().focus();
		  			$('#entityform input').first().focus();
		  		}
		  }).dialog('open');
}

function popupConfirmationDialogAndPost(url, submitType, titleCode, width, height, tabIndex, saveSuccessFunction, jsonString) {
		    var dialogDiv = $("<div id='dialog-form'><div id='formerrors'></div>" + doI18N('text.confirmation.required') + "</div>");
		  
		  	var confirmButton = doI18N('dialog.button.confirm');
			var cancelButton = doI18N('dialog.button.cancel');
			
			var buttonsOpts = {};
			buttonsOpts[confirmButton] = function() {
				executeAjaxRequest(url, submitType, jsonString, saveSuccessFunction, formErrorFunction);
			};
			
			buttonsOpts[cancelButton] = function() {$(this).dialog( "close" );};
		  
		  dialogDiv.dialog({
		  		title: doI18N(titleCode), 
		  		width: width, 
		  		height: height, 
		  		modal: true,
		  		buttons: buttonsOpts,
		  		close: function() {
		  			
		  			// if i dont do this, theres a problem with errors being appended to dialog view second time round
		  			$(this).remove();
				},
		  		open: function (event, ui) {}
		  	}).dialog('open');
}



//sign-out
function signOut(containerDivName) {
	base64 = "";
	$("#" + containerDivName).html("");
	alert("Close the Browser for a Complete Sign Out");
}


//Audit / Makerchecker functionality
function auditSearch(useType) {

	var successFunction = function(data, textStatus, jqXHR) {
			var crudObject = new Object();
			crudObject.crudRows = data;
			crudObject.useType = useType;
			var html = $("#auditSearchTemplate").render(crudObject);
			$("#content").html(html);  
			
			var datetimeOptions = {
							dateFormat: 'yy-mm-dd',
							timeFormat: "HH:mm:ss",
							showSecond: true
							}

			$('#auditdatetimefrom').datetimepicker(datetimeOptions);
			$('#auditdatetimeto').datetimepicker(datetimeOptions);
			$('#auditcheckeddatetimefrom').datetimepicker(datetimeOptions);
			$('#auditcheckeddatetimeto').datetimepicker(datetimeOptions);

			$('#searchaudit').button().click(function(e) {
				var validated = true;
				var auditSearchOptions = {};
				var auditAction = $('#auditaction').find(":selected").val();
				if (!(auditAction == "ALL")) auditSearchOptions.actionName = auditAction;

				var auditEntity = $('#auditentity').find(":selected").val();
				if (!(auditEntity == "ALL")) auditSearchOptions.entityName = auditEntity;

				var auditResourceId = $('#auditresourceId').val();
				if (auditResourceId > "") 
				{
					if (parseInt(auditResourceId) != auditResourceId )
					{
						alert(doI18N("resourceId.not.integer"));
						validated = false;
					}
					else auditSearchOptions.resourceId = parseInt(auditResourceId);
				}

				var auditMaker = $('#auditmaker').find(":selected").val();
				if (!(auditMaker == "ALL")) auditSearchOptions.makerId = auditMaker;


				var auditMadeOnDateTimeFrom = $('#auditdatetimefrom').val();
				if (auditMadeOnDateTimeFrom > "") auditSearchOptions.makerDateTimeFrom = auditMadeOnDateTimeFrom;

				var auditMadeOnDateTimeTo = $('#auditdatetimeto').val();
				if (auditMadeOnDateTimeTo > "") auditSearchOptions.makerDateTimeTo = auditMadeOnDateTimeTo;

				if (useType == 'audit')
				{
					var auditChecker = $('#auditchecker').find(":selected").val();
					if (!(auditChecker == "ALL")) auditSearchOptions.checkerId = auditChecker;
				
					var auditCheckedOnDateTimeFrom = $('#auditcheckeddatetimefrom').val();
					if (auditCheckedOnDateTimeFrom > "") auditSearchOptions.checkerDateTimeFrom = auditCheckedOnDateTimeFrom;

					var auditCheckedOnDateTimeTo = $('#auditcheckeddatetimeto').val();
					if (auditCheckedOnDateTimeTo > "") auditSearchOptions.checkerDateTimeTo = auditCheckedOnDateTimeTo;

					var auditProcessingResult = $('#auditprocessingresult').val();
					if (!(auditProcessingResult == "ALL")) auditSearchOptions.processingResult = auditProcessingResult;
				}
				
				if (validated == true) viewAudits(useType, auditSearchOptions);

			    e.preventDefault();
			});

	};

  	executeAjaxRequest(useType + 's/searchtemplate', 'GET', "", successFunction, formErrorFunction);

}

function viewAudits(useType, auditSearchOptions) {

	var url = useType + "s";
	
	var paramCount = 1;
	for (var i in auditSearchOptions)
	{
		if (paramCount > 1) url += "&"
		else url += "?";
		url += encodeURIComponent(i) + "=" + encodeURIComponent(auditSearchOptions[i]);
		paramCount = paramCount + 1;
	}	

	var successFunction = function(data, textStatus, jqXHR) {

				var crudObject = new Object();
				crudObject.crudRows = data;
				crudObject.useType = useType;
				var html = $("#auditListTemplate").render(crudObject);
				$("#auditSearchResults").html(html);  

				$("a.viewaudit").click( function(e) {
					
					var linkId = this.id;
					var entityId = linkId.replace("viewaudit", "");
					viewAuditEntry(entityId)
					e.preventDefault();
				});
				
				if (useType == "makerchecker") {
					var width = 400; 
					var height = 225;
					
					$("a.deletemc").click( function(e) {
						var linkId = this.id;
						var entityId = linkId.replace("deletemc", "");
						var url = 'makercheckers/' + entityId;
						var onMakerCheckerActionSuccessFunction = function(data) {
							  $('#dialog-form').dialog("close");
							  viewAudits(useType, auditSearchOptions);
							 }
						popupConfirmationDialogAndPost(url, 'DELETE', 'dialog.title.confirmation.required', width, height, 0, onMakerCheckerActionSuccessFunction);
						e.preventDefault();
					});
					$("a.approvemc").click( function(e) {
						var linkId = this.id;
						var entityId = linkId.replace("approvemc", "");
						var url = 'makercheckers/' + entityId + '?command=approve';						
						var onSuccessFunction = function(data) {
							$('#dialog-form').dialog("close");
							viewAudits(useType, auditSearchOptions);
						}
													
						popupConfirmationDialogAndPost(url, 'POST', 'dialog.title.confirmation.required', width, height, 0, onSuccessFunction);
						e.preventDefault();
					});
				}

				var oTable = displayEnhancedListTable("auditstable")
	};
		
	executeAjaxRequest(url, 'GET', "", successFunction, formErrorFunction);
}

function viewAuditEntry(auditId) {

	var url = 'audits/' + auditId;

	var successFunction = function(data, textStatus, jqXHR) {

		var dialogDiv = $("<div id='dialog-form'></div>");
		var obj = new Object();
		obj.crudRows = data;
		var html = $("#auditEntryTemplate").render(obj);
		dialogDiv.append(html);
		
		var closeButton = doI18N('dialog.button.close');
		var buttonsOpts = {};	
		buttonsOpts[closeButton] = function() {$(this).dialog( "close" );};
		
		dialogDiv.dialog({
		  		title: doI18N("view.audit.entry") + " - " + doI18N(data.actionName) + " " + doI18N(data.entityName), 
				width : custom.fitPopupWidth(),
				height : custom.fitPopupHeight(),
		  		modal: true,
		  		buttons: buttonsOpts,
	  			close: function() {
	  				$(this).remove();
				}
		  }).dialog('open');

	};
		
	executeAjaxRequest(url, 'GET', "", successFunction, formErrorFunction);
}
//end of audit & makercheck functions


//utility functions

highlightMissingXlations = "N";
function doI18N(xlateStr, params) { 
	if (highlightMissingXlations == "Y") return jQuery.i18n.prop(xlateStr, params)
	else
	{
		var xlated = jQuery.i18n.prop(xlateStr, params,arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]);
		if (xlated.substr(0,1) == "[" && xlated.substr(xlated.length - 1, 1) == "]") return xlated.substr(1, xlated.length - 2)
		else return xlated;
	}
}


function initialiseAndShowLogon() {
	jQuery.support.cors = true;

	setInitialCulture();

	jsViewsRegisterHelpers();

	baseApiUrl = getBaseApiURL(window.location.href);

	applicationProfile = "ALL";
	if (QueryParameters["applicationProfile"]) applicationProfile = QueryParameters["applicationProfile"];

	applicationMode = "PROD";
	if (QueryParameters["mode"]) applicationMode = QueryParameters["mode"];

	showLogon("container");
}

function getBaseApiURL(docURL)
{
	var l = getLocation(docURL);
	
	var baseApiUrl = "";
	if (l.hostname == "localhost" || l.hostname == "" || l.hostname == null || l.hostname == "192.168.2.137") {
		baseApiUrl = "https://192.168.2.137:8443/mifosng-provider/api/v1/";
	}
	else if (l.hostname == "demo.openmf.org") {
		baseApiUrl = "/mifosng-provider/api/v1/";
	} else {
		baseApiUrl = "https://192.168.2.137:8443/mifosng-provider/api/v1/";
	}
	
	if (QueryParameters["baseApiUrl"]) {
		baseApiUrl = QueryParameters["baseApiUrl"];
	}
    
    return baseApiUrl; 
}

getLocation = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

function setInitialCulture() {

	baseCulture = 'en';
	if (QueryParameters["baseCulture"]) baseCulture = QueryParameters["baseCulture"];
	switch(baseCulture)
	{
			case "en":
  				break;
			case "fr":
  				break;
			case "es":
  				break;
			case "pt":
  				break;
			case "zh":
  				break;
			default:
  				alert("The culture/language you specified (" + baseCulture + ") isn't available so will default to 'en' (English).");
				baseCulture = 'en';
	}
	setCulture(baseCulture);	
}

function setCultureReshowFirstPage(cultureVal) {
	setCulture(cultureVal);
	showMainContainer("container");
	custom.showFirstPage();
}


function setCulture(cultureVal) {
	currentCulture = cultureVal;
    	Globalize.culture(currentCulture);
    	
    	$.datepicker.setDefaults( $.datepicker.regional[currentCulture]);
                
    	var tenantTranslation = "messages-tenant-" + tenantIdentifier;
    	jQuery.i18n.properties({
			name:['messages', 'messages-platform-validation', tenantTranslation], 
			path: 'resources/global-translations/',
			mode:'map',
			cache: true,
			language: currentCulture,
			callback: function() {
			}
		});

	$.timepicker.regional[currentCulture] = {
		timeOnlyTitle: doI18N('timeOnlyTitle'),
		timeText: doI18N('timeText'),
		hourText: doI18N('hourText'),
		minuteText: doI18N('minuteText'),
		secondText: doI18N('secondText'),
		millisecText: doI18N('millisecText'),
		timezoneText: doI18N('timezoneText'),
		currentText: doI18N('currentText'),
		closeText: doI18N('closeText'),
		amNames: ['AM', doI18N('amNames'),],
		pmNames: ['PM', doI18N('pmNames'),],
		isRTL: false
	};
	$.timepicker.setDefaults($.timepicker.regional[currentCulture]);
}


QueryParameters = (function()
{
    var result = {};
    if (window.location.search)
    {
        // split up the query string and store in an associative array
        var params = window.location.search.slice(1).split("&");
        for (var i = 0; i < params.length; i++)
        {
            var tmp = params[i].split("=");
            result[tmp[0]] = unescape(tmp[1]);
        }
    }
    return result;
}());


function showNotAvailableDialog(titleCode) {
		var dialogDiv = $("<div id='notavailable-dialog-form'></div>");
		
		dialogDiv.append("<p>" + doI18N('dialog.messages.functionality.not.available') + "</p>");
		
		var okButton = doI18N('dialog.button.ok');
		
		var buttonsOpts = {};
		buttonsOpts[okButton] = function() {$(this).dialog("close");};
		
		dialogDiv.dialog({
	  		title: doI18N(titleCode), 
	  		width: 300, 
	  		height: 200, 
	  		modal: true,
	  		buttons: buttonsOpts,
	  		close: function() {
	  			// if i dont do this, theres a problem with errors being appended to dialog view second time round
	  			$(this).remove();
			}
		 }).dialog('open');
}
	
function showJson(commandAsJson) {

	jsonObj = JSON.parse(commandAsJson);
	if (jsonObj.permissions) jsonObj = jsonObj.permissions;

	var html = "";

	//var colNo = 0;
	for (var i in jsonObj)
	{

		if ((i != "dateFormat") && (i != "locale"))
		{
			
			html += '<tr><td width="100px"></td>';
			html += "<td>";
			html += "<b>" + doI18N(i) + ": </b>";
			html += "</td>";
			html += "<td>";
			html += jsonObj[i];
			html += "</td></tr>";
			/*
			colNo += 1;
			if (colNo == 1) html += "<tr>";
			else html += '<td width="100px"></td>';

			html += "<td>";
			html += "<b>" + doI18N(i) + ": </b>";
			html += "</td>";
			html += "<td>";
			html += jsonObj[i];
			html += "</td>";

			if (colNo == 2) 
			{
				colNo = 0;
				html += "</tr>";
			}
			
			*/
		}
	}
	//if (colNo == 1) html += '<td></td><td></td><td></td></tr>';

	if (html > "") html = '<table width="100%">' + html + "</table><br><br>";
	
	return html;
}

$.fn.serializeObject = function(serializationOptions)
{
	var o = {};
	var a;
	if (serializationOptions !== null && serializationOptions !== undefined) {
		a = this.serializeArray(serializationOptions);
	} else {
		a = this.serializeArray({checkboxesAsBools: true});
	}
	
	var arrayName, propertyName, index;

	$.each(a, function() {
		
		if (this.name === 'notSelectedCurrencies' || this.name === 'notSelectedRoles' 
	    		|| this.name === 'notSelectedClients' || this.name === 'notSelectedCharges' || this.name === 'notSelectedServices'
	    			|| this.name === 'notSelectedStates' || this.name === 'notSelectedMedia') {
			// do not serialize
		} else if (this.name.indexOf('[') !== -1) { //serialize as separate object
			arrayName = this.name.substring(0, this.name.indexOf("["));
			if (o[arrayName] === undefined){
				o[arrayName] = [];				
			}
			index = parseInt(this.name.substring(this.name.indexOf("[") + 1, this.name.indexOf("]")));
			if (index > 0){
				index -= 1;
			}
			if (o[arrayName][index] === undefined){
				o[arrayName][index] = {};
			}
			propertyName = this.name.substring(this.name.lastIndexOf("[") + 1, this.name.lastIndexOf("]"));
			o[arrayName][index][propertyName] = this.value || '';
		} else  {
		    if (o[this.name] !== undefined) {
		        if (!o[this.name].push) {
		            o[this.name] = [o[this.name]];
		        }
		        o[this.name].push(this.value || '');
		    } else {
		    	
		    	if (this.name === 'selectedItems' || this.name === 'notSelectedItems' || this.name === 'currencies'  || this.name === 'services' || this.name === 'states'
	        		|| this.name === 'roles' || this.name === 'clientMembers' || this.name === 'charges' || this.name === 'loans' || this.name === 'mediaData') {
		    		o[this.name] = new Array();
		    		o[this.name].push(this.value || '');
		    	} else {
		    		o[this.name] = this.value || '';	
		    	}
		    }
		}
	});
	
	//clean serialized arrays - remove nulls 
	$.each(o, function(key, value){
		if (value instanceof Array){
			o[key] = value.filter(function(e){return e}); 
		}
	})

	return o;
};

$.fn.serializeArray = function (options) {
    var o = $.extend({
        checkboxesAsBools: false
    }, options || {});

    var rselectTextarea = /select|textarea/i;
    var rinput = /text|hidden|password|search/i;

    return this.map(function () {
        return this.elements ? $.makeArray(this.elements) : this;
    })
    .filter(function () {
        return this.name && !this.disabled &&
            (this.checked
            || (o.checkboxesAsBools && this.type === 'checkbox')
            || rselectTextarea.test(this.nodeName)
            || rinput.test(this.type));
    })
        .map(function (i, elem) {
            var val = $(this).val();
            return val == null ?
            null :
            $.isArray(val) ?
            $.map(val, function (val, i) {
                return { name: elem.name, value: val };
            }) :
            {
                name: elem.name,
                value: (o.checkboxesAsBools && this.type === 'checkbox') ? 
                    (this.checked ? 'true' : 'false') :
                    val
            };
        }).get();
};

	
function displayListTable(tableDiv) {
	return  $("#" + tableDiv).dataTable(custom.jqueryDataTableLayout.basic());
}

function displayEnhancedListTable(tableDiv) {
	return  $("#" + tableDiv).dataTable(custom.jqueryDataTableLayout.enhanced());
}

function displayListTableWithExportOption(tableDiv) {
	return  $("#" + tableDiv).dataTable(custom.jqueryDataTableLayout.withExportOption());
}




function simpleOptionsHtml(htmlOptions) {

	//var htmlVar = '<div id="inputarea"></div><div id="schedulearea"></div>';
	var htmlVar = '<div>';
	htmlVar += '<span style="float: left">';
	htmlVar += htmlOptions;
	htmlVar += '</span>';
	htmlVar += '</div>';
	htmlVar += '<br><br>';
	htmlVar += '<div id="listplaceholder" ></div>';
	htmlVar += '<br><br>';
	return htmlVar;
}

//Error functions		
function removeErrors(placeholderDiv) {
		// remove error class from all input fields
		var $inputs = $('#entityform :input');
		
	    $inputs.each(function() {
	        $(this).removeClass("ui-state-error");
	    });
		
	  	$(placeholderDiv).html("");
}
	
function handleXhrError(jqXHR, textStatus, errorThrown, templateSelector, placeholderDiv) {
	  	if (jqXHR.status === 0) {
		    alert('No connection. Verify application is running.');
	  	} else if (jqXHR.status == 401) {
			alert('Unauthorized. [401]');
		} else if (jqXHR.status == 404) {
		    alert('Requested page not found. [404]');
		} else if (jqXHR.status == 405) {
			alert('HTTP verb not supported [405]: ' + errorThrown);
		} else if (jqXHR.status == 500) {
		    alert('Internal Server Error [500].');
		} else if (errorThrown === 'parsererror') {
		    alert('Requested JSON parse failed.');
		} else if (errorThrown === 'timeout') {
		    alert('Time out error.');
		} else if (errorThrown === 'abort') {
		    alert('Ajax request aborted.');
		} else {
			
			removeErrors(placeholderDiv);
			
		  	var jsonErrors = JSON.parse(jqXHR.responseText);
		  	var valErrors = jsonErrors.errors;
		  	var errorArray = new Array();
		  	var arrayIndex = 0;
		  	$.each(valErrors, function() {
		  	
		      // add error class to input in dialog
		  	  var fieldId = '#' + this.parameterName;
		  	  $("#dialog-form #entityform " + fieldId).addClass("ui-state-error");
		  	  
		  	  var errorObj = new Object();
		  	  errorObj.field = this.parameterName;
		  	  errorObj.code = this.userMessageGlobalisationCode;
		  	  
		  	  var argArray = new Array();
		  	  var argArrayIndex = 0;
		  	  $.each(this.args, function() {
		  		argArray[argArrayIndex] = this.value;
		  		argArrayIndex++;
		  	  });
		  	  // hardcoded support for six arguments
		  	  errorObj.message = doI18N(this.userMessageGlobalisationCode, argArray[0], argArray[1], argArray[2], argArray[3], argArray[4], argArray[5]);
		  	  errorObj.value = this.value;
		  	  
		  	  errorArray[arrayIndex] = errorObj;
		  	  arrayIndex++
		  	});
		  	
		  	var templateArray = new Array();
		  	var templateErrorObj = new Object();
		  	templateErrorObj.title = doI18N('error.msg.header');
		  	templateErrorObj.errors = errorArray;
		  	
		  	templateArray[0] = templateErrorObj;
		  	
		  	var formErrorsHtml = $(templateSelector).render(templateArray);
		  	
		  	$(placeholderDiv).append(formErrorsHtml);
		}
}

function jsViewsRegisterHelpers() {
	$.views.registerHelpers(custom.helperFunctions);
}
function postInterest(){
	var url = 'depositaccounts/postinterest';
	var width = 400; 
	var height = 225;
							
	popupConfirmationDialogAndPost(url, 'POST', 'dialog.title.confirmation.required', width, height, 0, saveSuccessFunctionReloadClientListing);
}

function showSavingAccount(accountId, accountNo, productName) {
	
	var newSavingTabId='saving'+accountId+'tab';
	
	//show existing tab if this Id is already present
	if(tabExists('clientdatatabs', newSavingTabId)){
		var index = $('#clientdatatabs a[href="#'+ newSavingTabId +'"]').parent().index(); 
		$('#clientdatatabs').tabs('select', index);
	}
	//else create new tab and set identifier properties
	else{
		var title = productName + ": #" + accountNo;			    
		$newtabs.tabs( "add", "unknown.html", title);
		loadSavingAccount(accountId);
		//add ids and titles to newly added div's and a'hrefs
		var lastAHref=$('#clientdatatabs> ul > li:last > a');
		var lastDiv=$('#clientdatatabs > div:last')
		var lastButOneDiv=$('#clientdatatabs > div:last').prev();
		lastAHref.attr('href','#saving'+accountId+'tab');
		lastButOneDiv.attr('id',newSavingTabId);
		//the add functionality seems to be adding a dummy div at the end 
		//am deleting the same to make div manipulation easier
		lastDiv.remove();
		}
}

function genSaveSuccessFunctionReloadSaving(savingAccountId) {

	return 'var saveSuccessFunctionReloadSaving = function(data, textStatus, jqXHR) { ' +
	' $("#dialog-form").dialog("close");' +
	' loadSavingAccount(' + savingAccountId + ');' +
	' clientDirty = true;' +
	'};';
}

function loadSavingAccount(accountId) {
	
	var accountUrl = 'savingsaccounts/' + accountId+ "?associations=all";

	var errorFunction = function(jqXHR, status, errorThrown, index, anchor) {
    	handleXhrError(jqXHR, status, errorThrown, "#formErrorsTemplate", "#formerrors");
        //$(anchor.hash).html("error occured while ajax loading.");
	};
	
	var successFunction = function(data, status, xhr) {
		var currentTabIndex = $newtabs.tabs('option', 'selected');
    	var currentTabAnchor = $newtabs.data('tabs').anchors[currentTabIndex];
    	
    	var tableHtml = $("#savingAccountDataTabTemplate").render(data);
    	
    	var data = new Object();
		
		var currentTab = $("#clientdatatabs").children(".ui-tabs-panel").not(".ui-tabs-hide");
		currentTab.html(tableHtml);

		var curTabID = currentTab.prop("id");
		
		var $savingtabs = $("#savingtabs" + accountId).tabs({
			"show": function(event, ui) {
				var curTab = $('#savingtabs .ui-tabs-panel:not(.ui-tabs-hide)');
      			var curTabID = curTab.prop("id")
			}
		});
		
		$('.savingsaccountdeposit').button({icons: {primary: "ui-icon-arrowthick-1-e"}}).click(function(e) {
			var linkId = this.id;
			var savingAccountId = linkId.replace("savingsaccountdepositbtn", "");
			var postUrl = 'savingsaccounts/' + savingAccountId + '/transactions?command=deposit';
			var getUrl = 'savingsaccounts/' + savingAccountId + '/transactions/template?command=deposit';
			var templateSelector = "#savingsAccountTransactionFormTemplate";
			var width = 400; 
			var height = 280;

			eval(genSaveSuccessFunctionReloadSaving(savingAccountId));
			popupDialogWithFormView(getUrl, postUrl, 'POST', 'dialog.title.deposit', templateSelector, width, height, saveSuccessFunctionReloadSaving);
		    
			e.preventDefault();
		});
		$('button.savingsaccountdeposit span').text(doI18N('button.deposit'));
		
		$('.savingsaccountwithdrawal').button({icons: {primary: "ui-icon-arrowthick-1-w"}}).click(function(e) {
			var linkId = this.id;
			var savingAccountId = linkId.replace("savingsaccountwithdrawalbtn", "");
			var postUrl = 'savingsaccounts/' + savingAccountId + '/transactions?command=withdrawal';
			var getUrl = 'savingsaccounts/' + savingAccountId + '/transactions/template?command=withdrawal';
			var templateSelector = "#savingsAccountTransactionFormTemplate";
			var width = 400; 
			var height = 280;

			eval(genSaveSuccessFunctionReloadSaving(savingAccountId));
			popupDialogWithFormView(getUrl, postUrl, 'POST', 'dialog.title.withdrawal', templateSelector, width, height, saveSuccessFunctionReloadSaving);
		    
			e.preventDefault();
		});
		$('button.savingsaccountwithdrawal span').text(doI18N('button.withdrawal'));
		
		$('.savingsaccountinterestcalc').button({icons: {primary: "ui-icon-calculator"}}).click(function(e) {
			var linkId = this.id;
			var savingAccountId = linkId.replace("savingsaccountinterestcalcbtn", "");
			var postUrl = 'savingsaccounts/' + savingAccountId + '?command=calculateInterest';
			var width = 400; 
			var height = 280;
			
			eval(genSaveSuccessFunctionReloadSaving(savingAccountId));
			popupConfirmationDialogAndPost(postUrl, 'POST', 'dialog.title.calculateInterest', width, height, 0, saveSuccessFunctionReloadSaving);
			e.preventDefault();
		});
		$('button.savingsaccountinterestcalc span').text(doI18N('button.calculateInterest'));
		
		$('.savingsaccountinterestpost').button({icons: {primary: "ui-icon-clock"}}).click(function(e) {
			var linkId = this.id;
			var savingAccountId = linkId.replace("savingsaccountinterestpostbtn", "");
			var postUrl = 'savingsaccounts/' + savingAccountId + '?command=postInterest';
			var width = 400; 
			var height = 280;
			
			eval(genSaveSuccessFunctionReloadSaving(savingAccountId));
			popupConfirmationDialogAndPost(postUrl, 'POST', 'dialog.title.postInterest', width, height, 0, saveSuccessFunctionReloadSaving);
			e.preventDefault();
		});
		$('button.savingsaccountinterestpost span').text(doI18N('button.postInterest'));
		
		$('.savingsaccountactivate').button({icons: {primary: "ui-icon-circle-check"}}).click(function(e) {
			var linkId = this.id;
			var savingAccountId = linkId.replace("savingsaccountactivatebtn", "");
			var getUrl = 'savingsaccounts/' + savingAccountId + '?command=activate&template=true';
			var postUrl = 'savingsaccounts/' + savingAccountId + '?command=activate';
			var templateSelector = "#activationTemplate";
			var width = 400; 
			var height = 225;
			
			eval(genSaveSuccessFunctionReloadSaving(savingAccountId));
			popupDialogWithFormView(getUrl, postUrl, 'POST', 'dialog.title.activation', templateSelector, width, height, saveSuccessFunctionReloadSaving);
		    e.preventDefault();
		});
		$('button.savingsaccountactivate span').text(doI18N('button.activate'));
		
		$('.savingsaccountdelete').button({icons: {primary: "ui-icon-trash"}}).click(function(e) {
			var linkId = this.id;
			var savingAccountId = linkId.replace("savingsaccountdeletebtn", "");
			var url = 'savingsaccounts/' + savingAccountId;
			var width = 400; 
			var height = 225;
									
			popupConfirmationDialogAndPost(url, 'DELETE', 'dialog.title.confirmation.required', width, height, 0, saveSuccessFunctionReloadClient);
		    e.preventDefault();
		});
		$('button.savingsaccountdelete span').text(doI18N('button.delete'));
		
		$('.editsavingsaccountnobtn').button({icons: {primary: "ui-icon-pencil"}}).click(function(e){

			var linkId = this.id;
			var savingAccountId = linkId.replace("editsavingsaccountnobtn", "");
			var putUrl = 'savingsaccounts/' + savingAccountId;
			var getUrl = 'savingsaccounts/' + savingAccountId;

			var templateSelector = "#editAccountNoFormTemplate";
			var width = 425; 
			var height = 225;

			eval(genSaveSuccessFunctionReloadSaving(savingAccountId));
			popupDialogWithFormView(getUrl, putUrl, 'PUT', "dialog.title.edit.accountno", templateSelector, width,  height, saveSuccessFunctionReloadSaving);
		    e.preventDefault();
		});
		$('button.editaccountnobtn span').text(doI18N('link.action.edit'));

		/*
		 * This works but not showing savings datatables by default yet.  When ready just uncomment
		 * custom.showRelatedDataTableInfo($savingtabs, "m_savings_account", accountId); 
		 */
	}
		
	executeAjaxRequest(accountUrl, 'GET', "", successFunction, errorFunction);	
}

function checkSubmit(e, logonDivName, username, password)
{
	 if(e && e.keyCode == 13)
	 {
		 setBasicAuthKey(logonDivName, username, password);
	 }
}
  
$.fn.enterKey = function (fnc) {
    return this.each(function () {
        $(this).keypress(function (ev) {
            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
            if (keycode == '13') {
                fnc.call(this, ev);
            }
        })
    })
}


function refreshCalendarWidget(resourceId, resource, calendarContent) {
                    
    eval(genRefreshCalendarWidgetSuccessVar(resourceId, resource, calendarContent));
    if (resource == 'centers') {
    	executeAjaxRequest(resource + '/' + resourceId + '/calendars', 'GET', "", successFunction, formErrorFunction);
    }else{
    	executeAjaxRequest(resource + '/' + resourceId + '/calendars?associations=parentCalendars', 'GET', "", successFunction, formErrorFunction);
    }
    
}

function genRefreshCalendarWidgetSuccessVar(resourceId, resource, calendarContent) {

return 'var successFunction = function(data, textStatus, jqXHR) {   ' +
          ' var calendar = new Object();' + 
          ' calendar.crudRows = data;' +
          ' var tmp = "' + resource.toUpperCase() + '";' + 
          ' calendar.resource = tmp;' +
          ' var tableHtml = $("#calendarWidgetFormTemplate").render(calendar);' +
          'if(calendar.crudRows.length > 0){var addCalbtn = $(".addcalendarbtn"); if(addCalbtn != undefined){addCalbtn.remove();}}' +
          ' $("#' + calendarContent + '").html(tableHtml);' +
          ' $(".editcalendar").click(function(e) { ' +
                ' var linkId = this.id;' +
                ' var resourceName = "' + resource + '";' +
                ' var resourceId = ' + resourceId + ';' +
                ' var entityType = $(this).attr("entityType");' +
                ' var entityId = $(this).attr("entityId");' +
                ' if (entityType) {' +
                	'resourceName = entityType.toLowerCase();' +
                	' resourceId = entityId;' +
                ' }' + 
                ' var contentDiv = ' + calendarContent + ';' +
                ' var calendarId = linkId.replace("editcalendarlink", "");' +
                ' editCalendar(resourceId, resourceName,"' + calendarContent + '",calendarId);' +
                //' popupDialogWithFormView(getAndPutUrl, getAndPutUrl, "PUT", "dialog.title.edit.note", templateSelector, width, height,  saveSuccessFunction);' +
                ' e.preventDefault();' +
          ' });' +
          //' var recurringdata = "recurringdata"; ' +
            ' $(".recurringdata").hide();' +
            ' $(".recurshow").click(function(e){' +
            ' var linkId = this.id;' +
            ' var calendarId = linkId.replace("recurshow", "");' +
            ' var recdataDivId = "recurringdata" + calendarId;' +
            ' var recdataDiv = $("#" + recdataDivId);' +
            ' $("#showrecurlink").hide();' + 
            ' recdataDiv.show();' +
            ' e.preventDefault();' + 
            ' }); ' +
    
            ' $(".recurhide").click(function(e){' +
            ' var linkId = this.id;' +
            ' var calendarId = linkId.replace("recurhide", "");' +
            ' var recdataDivId = "recurringdata" + calendarId;' +
            ' var recdataDiv = $("#" + recdataDivId);' +
            ' recdataDiv.hide();' +
            ' $("#showrecurlink").show();' + 
            ' e.preventDefault();' + 
            ' });' +
      ' };'
}    

function addCalendar(resourceId, resource, contentDiv){
    var postUrl = resource + "/" + resourceId + "/calendars";
    getCalendar(resourceId, resource, contentDiv, 'template', 'POST', postUrl);
}

function editCalendar(resourceId, resource, contentDiv, calendarId){
    var action = calendarId + '?template=true';
    var putUrl = resource + "/" + resourceId + "/calendars/" + calendarId;
    getCalendar(resourceId, resource, contentDiv, action, 'PUT', putUrl);
}

function getCalendar(resourceId, resource, contentDiv, action, submitType, postPutUrl){

    var getUrl = resource + "/" + resourceId + "/calendars/" + action;
        
    var dialogTitle = 'dialog.title.add.calendar';
    var templateSelector = "#calendarFormTemplate";
    var width = 700;
    var height = 580;
        
    var successFunction = function(data, textStatus, jqXHR) {
        
        var saveSuccessFunction = function(data, textStatus, jqXHR) {
            $("#dialog-form").dialog("close");
            refreshCalendarWidget(resourceId, resource, contentDiv);
        }
        
        popupDialogWithFormViewData(data, postPutUrl, submitType, dialogTitle, templateSelector, width, height, saveSuccessFunction);

        var repeats =  $('select.repeats');
        var repeatsEvery = $('select.repeatsEvery');
        
        if(data.repeating === true){
            $("#repeatingdetails").show();
        }else{
            $("#repeatingdetails").hide();
        }
        
        
        $('input:checkbox[name=repeating]').change(function(){
            var repeatdetails = $('#repeatingdetails');
            var checked = this.checked ? repeatdetails.show(): repeatdetails.hide();
            //collection meeting never ends
           
            if($('#meetingTypeId').val() == "1"){
            	$('.endsafter').hide();
		    	$('.endson').hide();
            }else{
            	$('.endsafter').show();
		    	$('.endson').show();
            }
            
        });
        
        var repeatsOptions = {
            "Daily":"day(s)",
            "Weekly":"week(s)",
            "Monthly":"month(s)",
            "Yearly":"year(s)"
        }
                            
        //Load Repeats options
        repeats.empty().append(function() {
            var output = '';
            $.each(repeatsOptions, function(key, value) {
                output += '<option value="' + key + '">' + key + '</option>';
            });
            return output;
        });
                
        repeatsEvery.empty().append(function() {
            var output = '';
            for(i=1; i<=30; i++){
                output += '<option value="' + i + '">' + i + '</option>';
            }
            return output;
        });
        
        repeats.change(function() {
            var textOpt = repeatsOptions[repeats.val()];
            $('.repeatsOnText').html(textOpt);
            if(repeats.val() == "Weekly"){
                $('#weeklyoptions').show();    
            }else{
                $('#weeklyoptions').hide();
            }
        });
    	
        $('#meetingTypeId').change(function() {
            var meetingTypeId = $(this).val();
            if(meetingTypeId == "1"){
        		$('.location').hide();//Not required for collection meeting
		        $('.reminders').hide();//Not required for collection meeting
		        $('.duration').hide();//Not required for collection meeting
		        $('input:checkbox[name=repeating]').prop('checked', true);
		        $('input:checkbox[name=repeating]').trigger('change');
		        
            }else{
            	$('.location').show();
	        	$('.reminders').show();
    		    $('.duration').show();
    		    $('input:checkbox[name=repeating]').prop('checked', false);
		        $('input:checkbox[name=repeating]').trigger('change');
            }
        });

        $( "input:radio" ).on( "click", function() {
            var checkedValue = $("input:checked").val();
            switch (checkedValue) {
                case "endsnever":
                    $('.endsafter').val('').attr('readonly', true);                  
                break;
                case "endsafter":
                    $('.endsafter').attr('readonly', false);
                break;
                case "endondate":
                    $('.endsafter').val('').attr('readonly', true);
                break;
            }
            
        });
        
        $('#weeklyoptions').hide();
        
        $('input:checkbox[name=repeating]').prop('checked', data.repeating);
        
        if(data.recurrence){
            var freqoptions = {
                'DAILY':'Daily',
                'WEEKLY':'Weekly',
                'MONTHLY':'Monthly',
                'YEARLY':'Yearly'
            }
            
            matches = /FREQ=([^;]+);?/.exec(data.recurrence);
            if (matches) {
                var freq = matches[1];
                var repeatOption = freqoptions[freq];
                $('#repeats').val(repeatOption);
                
                //If recurring weekly, set week day
                if(freq === 'WEEKLY'){
                    matches = /BYDAY=([^;]+);?/.exec(data.recurrence);
                    if (matches) {
                        var byday = matches[1]; 
                        $('#weeklyoptions').show();
                        
                        $.each($("input[name='repeatson[]']"), function() {
                          if($(this).val() === byday){
                              $(this).prop('checked', true);
                          }
                        }); 
                    }
                }
            }
            
            matches = /INTERVAL=([0-9]+);?/.exec(data.recurrence);
            if (matches) {
                interval = matches[1];
            } else {
                interval = '1';
            }
            $('#repeatsEvery').val(interval);
            
            matches = /COUNT=([0-9]+);?/.exec(data.recurrence);
            if (matches) {
                count = matches[1];
                $('#endsafterrd').prop('checked',true);
                $('endsafter').val(count);    
            }else{
                $('#endsnever').prop('checked',true);
            }
            
            if(data.endDate){
                $('#endson').prop('checked',true);
            }
                
        }

                //hide non-required fields, enable them based on selected meeting type

        $('.location').hide();
        $('.reminders').hide();
        $('.duration').hide();

        $('#meetingTypeId').val(data.type.id);
        $('#meetingTypeId').trigger('change');
        if(data.remindBy){
        	$('#remindById').val(data.remindBy.id);	
        }
        
                                       
    }

    executeAjaxRequest(getUrl, "GET", "", successFunction, formErrorFunction);

}

function convertToRfc5545(){
    // RRULE TEMPLATES
    
    var rruletemplate = {
        "Daily":"FREQ=DAILY",
        "Weekly":"FREQ=WEEKLY",
        "Monthly":"FREQ=MONTHLY",
        "Yearly": "FREQ=YEARLY"
    }

    var field, freq, interval, rrule, occurrences, date;

    //Get Frequency
    freq = $("#repeats").val();
    rrule = rruletemplate[freq];
    interval = $('#repeatsEvery').val();
    if (interval !== '1') {
        rrule += ';INTERVAL=' + interval;
    }
    
    if(freq == "Weekly"){
        //Get weekly details
        var values = new Array();
        $.each($("input[name='repeatson[]']:checked"), function() {
          values.push($(this).val());
        });
        
        if (values) {
            rrule += ';BYDAY=' + values.toString();
        }
    }
    
    //Ends on
    var endType = $('input[name=endsonrd]:checked').val();
    
    switch (endType) {

    case 'endsafter':
        occurrences = $('input[name=endsafter]').val();
        rrule += ';COUNT=' + occurrences;
        break;
    case 'endondate':
        field = $('input[name=endondate]');
        date = $.datepicker.formatDate('yymmdd', $( "input[name=endondate]" ).datepicker( "getDate" ));
        rrule += ';UNTIL=' + date + 'T000000';
        break;
    }
        
    return rrule;
}

function loadAvailableCalendars(data, meeting){
    var tableHtml = $('#meetingCalendarTemplate').render();
    $('#meetingCalendarPlaceholder').html(tableHtml);
    var calendars = new Object();
    calendars.crudRows = data;
    var output = "";
    if(calendars.crudRows.length > 1){
    	output = '<option value=0> -- Select a meeting -- </option>';
    }

    $('#calendarId').empty().append(function(){
        
        $.each(calendars.crudRows, function(key, value){
            output += '<option value=' + value.id + '>' + value.title + ' - ';
            if(value.entityType.value === 'CLIENTS'){
                output += doI18N("label.select.calendar.client");
            } else if(value.entityType.value === 'CENTERS'){
                output += doI18N("label.select.calendar.center");
            } else if(value.entityType.value === 'GROUPS'){
                output += doI18N("label.select.calendar.group");
            } else if(value.entityType.value === 'LOANS'){
                output += doI18N("label.select.calendar.loan");
            }
                
            output += '</option>';
        });
        return output;
    });

    $('#calendarId').change(function(){
        var calendarId = $(this).val();
        if(calendarId !== 0){
        
            //set first recurring date as expected disbursal date
            var selectedCalendars = $.grep(calendars.crudRows, function(n, i) {
                return n.id == calendarId;
            });
        
            if (selectedCalendars.length > 0) {
                var selectedCalendar = selectedCalendars[0];//get calendar from array
                var recurringDates = selectedCalendar.nextTenRecurringDates;
                var firstDate = recurringDates[0];//First recurring date
                //var secondDate = recurringDates[1];//Second recurring date
                
                $( '#expectedDisbursementDate' ).val(custom.helperFunctions.globalDate(firstDate));
                //$( '#repaymentsStartingFromDate' ).val(custom.helperFunctions.globalDate(secondDate));
                
                //Set loan term
                
                var matches = /FREQ=([^;]+);?/.exec(selectedCalendar.recurrence);
                if (matches) {
                    var freq = matches[1];
                    var loantermoptionvalue;
                    if(freq === 'DAILY'){
                        loantermoptionvalue = 0;
                    }else if(freq === 'WEEKLY'){
                        loantermoptionvalue = 1;
                    }else if(freq === 'MONTHLY'){
                        loantermoptionvalue = 2;
                    }else if(freq === 'YEARLY'){
                        loantermoptionvalue = 3;
                    }
                    
                    $('#loanTermFrequencyType').val(loantermoptionvalue);
                    $('#repaymentFrequencyType').val(loantermoptionvalue);
                }
                
                //Set repaymentEvery 
                matches = /INTERVAL=([0-9]+);?/.exec(data.recurrence);
                if (matches) {
                    interval = matches[1];
                } else {
                    interval = '1';
                }
                
                $('#repaymentEvery').val(interval);        
            }

        }
    });

    var availableDate = function(date) {
          
        var recurringDates = [];
        var selectedcals = $.grep(calendars.crudRows, function(n, i) {
            return n.id == $("#calendarId").val();
        });
    
        if (selectedcals.length > 0) {
            var selcal = selectedcals[0];
            var recudatearr = selcal.recurringDates;
            $.each(recudatearr, function(n,i){
                var newdate = i[0] + "-" + ("0"+(i[1])).slice(-2) + "-" + ("0"+(i[2])).slice(-2);
          
                recurringDates[n] = newdate;
            });
        }
        
        var ymd = date.getFullYear() + "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" + ("0"+date.getDate()).slice(-2);

        if ($.inArray(ymd, recurringDates) < 0 ) {
            return [false, "","unAvailable"];
        } else {
            return [true,"","Available"];
        }
    }
    $( '#expectedDisbursementDate' ).datepicker( "destroy" );
    $('#expectedDisbursementDate').datepicker({ dateFormat: custom.datePickerDateFormat, beforeShowDay: availableDate});

    $( '#repaymentsStartingFromDate' ).datepicker( "destroy" );
    $('#repaymentsStartingFromDate').datepicker({ dateFormat: custom.datePickerDateFormat, beforeShowDay: availableDate});
    
    if(meeting) {
        $("#calendarId").val(meeting.id);
        //if(expectedDisbursementDate){
        //	$( '#expectedDisbursementDate' ).val(custom.helperFunctions.globalDate(expectedDisbursementDate));	
        //}        
    }else if(calendars.crudRows.length === 1){
    	//if meeting is not attached then only trigger change event
    	$('#calendarId').trigger('change');
    }
}
function loadAttachedCalendarToLoan(loanId){
    var successFunction = function(data, textStatus, jqXHR) {
        var calendars = new Object();
        calendars.crudRows = data;
        if(calendars.crudRows.length > 0){
            var calendar = calendars.crudRows[0];
            $("#calendarId").val(calendar.id);
        }            
    }        
    executeAjaxRequest('loans/' + loanId + '/calendars?parameters=id,entityId,entityType', 'GET', "", successFunction, formErrorFunction);
}

function showCollectionSheet() {

    setCollectionSheetContent("content");
    
    $("#tabs").tabs({
        select: function(event, ui) {
        },
        load: function(event, ui) {
        },
        show: function(event, ui) {

            var initCollectionSheet =  function() {
            //render page markup
                var tableHtml = $("#collectionSheetTabTemplate").render();
                $("#collectionsheettab").html(tableHtml);
                //fetch all Offices 
                var officeSuccessFunction =  function(data) {
                    var officeObject = new Object();
                    officeObject.crudRows = data;

                    $('#officeId').empty().append(function(){
                        var output = '<option value=0> -- Select a Branch Office -- </option>';
                        $.each(officeObject.crudRows, function(key, value){
                           output += '<option value=' + value.id + '>' + value.nameDecorated + '</option>';
                        });
                        return output;
                    });

                    $("#officeId").change(function(){
                        loadAssociatedGroups($(this).val());
                    })
                };
                executeAjaxRequest('offices', 'GET', "", officeSuccessFunction, formErrorFunction);

                $('.datepickerfieldnoconstraint').datepicker({constrainInput: true, defaultDate: 0, dateFormat: custom.datePickerDateFormat});

                $('#continuebtn').button({
                    icons: {
                        primary: "ui-icon-circle-arrow-e"
                    }
                 }).click(function(e){
                     loadCollectionSheet($('#groupId').val());
                 });
            }
            initCollectionSheet();
        }
    });  

} // end showCollectionSheet

function setCollectionSheetContent(divName) {
    var htmlVar = "";
    
    htmlVar += '<div id="tabs"><ul><li><a href="#collectionsheettab" title="CollectionSheet">' + doI18N("tab.collection.sheet") + '</a></li></ul><div id="collectionsheettab"></div></div>';

    $("#" + divName).html(htmlVar);
}

function loadAssociatedGroups(officeId){

    var csGroupSearchSuccessFunction =  function(data) {
        var groupObject = new Object();
        groupObject.crudRows = data;

        $('#groupId').empty().append(function(){
            var output = '<option value=0> -- Select a Branch Office -- </option>';
            $.each(groupObject.crudRows, function(key, value){
               output += '<option value=' + value.id + '>' + value.name + '</option>';
            });
            return output;
        });        
    };
    executeAjaxRequest('groups?officeId=' + officeId, 'GET', "", csGroupSearchSuccessFunction, formErrorFunction);
}

function loadCollectionSheet(groupId){
	removeErrors('#formerrors');
    var date = $.datepicker.formatDate('yymmdd', $('#dueDate').datepicker( "getDate" ));
    var getUrl = 'groups/' + groupId + '/collectionsheet?dueDate=' + date;
    var postUrl = 'groups/' + groupId + '/collectionsheet';
    $("#collectionSheetContent").html("");
    var successFunction = function(data){
        var collections = new Object();
        if (data.groups.length <= 0) {
        	var msg = '<p><b><i> No repayments and disbursal are available for selected Group and meeting date</i></b></p>';
        	$("#collectionSheetContent").html(msg);
        }else{
	        collections.crudRows = data;
	        var tableHtml = $("#collectionSheetTemplate").render(collections);
	        $("#collectionSheetContent").html(tableHtml);
        }  
        var sumTotalDue = function(data){
            var groups = data.groups;
            var loanProducts = data.loanProducts;
            $.each(loanProducts, function(key, value){
                var loanProd = value;
                var sumTotalDue = 0.0, sumTotalDisbarsal = 0.0;
                $.each(groups, function(key, value){
                    var group = value;
                    var grouptotalDue = 0.0, groupTotalDisbarsal = 0.0;
                    $('.grouptotaldue_' + group.groupId + '_' + loanProd.id).each(function(){
                        var tmpAmount = parseFloat(($(this).val()).replace(",", ""));
                       grouptotalDue += tmpAmount;
                       sumTotalDue += tmpAmount;
                    });

                    $('#grouptotaldue_' + group.groupId + '_' + loanProd.id).val(grouptotalDue);
                    
                    $('.grouptotaldisbursal_' + group.groupId + '_' + loanProd.id).each(function(){
                        var tmpAmount = parseFloat(($(this).val()).replace(",", ""));
                       groupTotalDisbarsal += tmpAmount;
                       sumTotalDisbarsal += tmpAmount;
                    });
                    $('#grouptotaldisbursal_' + group.groupId + '_' + loanProd.id).val(groupTotalDisbarsal);
               }); 
                $('#sumtotaldue_' + loanProd.id).val(sumTotalDue);
                $('#sumdisbursal_' + loanProd.id).val(sumTotalDisbarsal);
            });
            
        }

        sumTotalDue(data);

        $('.grouptotaldue').change(function(){
            var data = collections.crudRows;
            sumTotalDue(data); 
        });

        var saveCollectionSheetTransactions = function(postUrl){
            serializedArray = {};
            serializedArray["locale"] = $('#locale').val();
            serializedArray["dateFormat"] = $('#dateFormat').val();
            serializedArray["transactionDate"] = $('#dueDate').val();
            serializedArray["actualDisbursementDate"] = $('#dueDate').val();
            serializedArray["bulkRepaymentTransactions"] = new Array();
            $.each($('.grouptotaldue'), function(i){
                var transactionAmount = $(this).val();
                var loanId = this.id.replace("totaldue_", "");
                var tempObject = new Object();
                tempObject.loanId = loanId;
                tempObject.transactionAmount = transactionAmount;
                serializedArray["bulkRepaymentTransactions"][i] = tempObject;
            });
            
            serializedArray["bulkDisbursementTransactions"] = new Array();
            $.each($('.grouptotaldisbursement'), function(i){
                var transactionAmount = $(this).val();
                var loanId = this.id.replace("disbursement_", "");
                var tempObject = new Object();
                tempObject.loanId = loanId;
                tempObject.transactionAmount = transactionAmount;
                serializedArray["bulkDisbursementTransactions"][i] = tempObject;
            });
            
            var saveSuccessFunction = function(data){
                $('#collectionSheetContent').html("<label><b>Collection Sheet saved successfully</b></label>");
            }
            
            var newFormData = JSON.stringify(serializedArray);
            executeAjaxRequest(postUrl, "post", newFormData, saveSuccessFunction, formErrorFunction);
        }

        $('#savebtn').button({
            icons : {
                primary : "ui-icon-disk"
            }
         }).click(function(e){
             saveCollectionSheetTransactions(postUrl);
             e.preventDefault();
         });
         
         $('#cancelbtn').button({
            icons : {
                primary : "ui-icon-close"
            }
         }).click(function(e){
             $('#collectionSheetContent').html("");
             e.preventDefault();
         });
        
        $(".collections td:last-child").addClass('righthighlightcolheader');
        $(".collections th:last-child").addClass('righthighlightcolheader');
    }
    executeAjaxRequest(getUrl, 'GET', "", successFunction, formErrorFunction);
}
function addPaymode() {
	successFunction =  function(data, textStatus, jqXHR) {
	//var getUrl ='prices/'+plan_code;
	var crudObject = new Object();
		crudObject.crudRows = data;
		var html = $("#paymodeFormListTemplate").render(crudObject);
		$("#listplaceholder").html(html);  
	
		 var oTable=displayListTable("paymodestable");
		 
		
	$('.newpaymodebtn').button(
	  ).click(function(e) {
		
		  var getUrl ='paymodes/template';
		  var postUrl = 'paymodes';
		
	var width = 650; 
	var height = 300;
	var templateSelector = "#paymodeFormtemplate";
	var saveSuccessFunction = function(data, textStatus, jqXHR) {
	  	$("#dialog-form").dialog("close");
	  	addPaymode();return false;	
	  
	};
	popupDialogWithFormView(getUrl, postUrl, 'POST', "paymodes", templateSelector, width, height,saveSuccessFunction);
//	popupDialogWithFormView(getUrl, postUrl, 'POST', "paymodes","#paymodeFormTemplate", 700, 300,saveSuccessFunction);
	// e.preventDefault();
	  });
	

	$(".updatepaymode").click( function(e) {
		var linkId = this.id;
		var entityId = linkId.replace("updatepaymode", "");

        var geturl="paymodes/"+entityId;
		var resourceUrl = "paymode" + "s/" + entityId;
		var saveSuccessFunction = function(data, textStatus, jqXHR) {
		  	$("#dialog-form").dialog("close");
		  	addPaymode();
		  	
		};
		
		popupDialogWithFormView(geturl, resourceUrl, 'PUT', "Update paymode", "#paymodeFormTemplate", 700,300,saveSuccessFunction);
	  
	});
	
	$(".deletepaymode").click( function(e) {
		

		var linkId =this.id;
		var entityId = linkId.replace("deletepaymode", "");

		var resourceUrl ="paymode" + "s/" + entityId;
		var width = 400; 
		var height = 150;
		var saveSuccessFunction = function(data, textStatus, jqXHR) {
		  	$("#dialog-form").dialog("close");
		  	addPaymode();
		  	
		};
		popupConfirmationDialogAndPost(resourceUrl, 'DELETE', 'dialog.title.confirmation.required', width, height, entityId, saveSuccessFunction);
	
	});

	};
	executeAjaxRequest('paymodes', 'GET', "", successFunction);
}
function addNewContract()
{
	maintainTable('subscription', 'subscriptions', 'POST');	
}

function addNewPaymode()
{
 var postUrl = 'paymodes';
var templateSelector = "#paymodeFormTemplate";
var width = 400; 
var height = 200;
var saveSuccessFunction = function(data, textStatus, jqXHR) {
	$("#dialog-form").dialog("close");
	addPaymode();
};
popupDialogWithFormView("", postUrl, 'POST', "paymodes", templateSelector, width, height,saveSuccessFunction);
e.preventDefault();
}

function addService()
{
 var postUrl = 'servicemasters';
var templateSelector = "#servicemasterFormTemplate";
var width = 750; 
var height = 300;
var saveSuccessFunction = function(data, textStatus, jqXHR) {
	$("#dialog-form").dialog("close");
	refreshTableView("servicemaster");return false;
};
popupDialogWithFormView("servicemasters/template", postUrl, 'POST', "Services", templateSelector, width, height,saveSuccessFunction);
e.preventDefault();
}


function updateService(serviceId)
{
		var linkId = this.id;
		var entityId =serviceId;
     
		var resourceUrl = "servicemaster" + "s/" + serviceId;
		maintainTable('servicemaster', resourceUrl, 'PUT');
}
	
function deleteService(id)
{
		var entityId =id;

			var resourceUrl ="servicemaster" + "s/" + entityId;
			var width = 400; 
			var height = 150;
			var saveSuccessFunction = function(data, textStatus, jqXHR) {
			  	$("#dialog-form").dialog("close");
			  	refreshTableView("servicemaster");
			};
			popupConfirmationDialogAndPost(resourceUrl, 'DELETE', 'dialog.title.confirmation.required', width, height, entityId, saveSuccessFunction);
}

function addPlan()
{
	maintainTable('plan', 'plans', 'POST');return false;
}
function repopulatesPlanForm() {
	
	successFunction =  function(data, textStatus, jqXHR) {
		
			var formHtml = $("#planFormTemplate").render(data);
		
			$("#inputarea").html(formHtml);

	
			$('.datepickerfield').datepicker({constrainInput: true, defaultDate: 0, maxDate: 0, dateFormat: 'dd MM yy'});
			$('.datepickerfieldnoconstraint').datepicker({constrainInput: true, defaultDate: 0, dateFormat: 'dd MM yy'});
		
			$('#addservices').click(function() {  
				return !$('#notSelectedServices option:selected').remove().appendTo('#services');  
			});	
			$('#removeservices').click(function() {  
				return !$('#services option:selected').remove().appendTo('#notSelectedServices');  
			}); 
			
			
			$('#submitloanapp').button().click(function(e) {
				submitPlanApplication();
			    e.preventDefault();
			});
			$('button#submitPayment span').text(doI18N('dialog.button.submit'));
			$('#cancelloanapp').button().click(function(e) {
				setSubscriptionContent("content");
			    e.preventDefault();
			});
			$('button#cancelloanapp span').text(doI18N('dialog.button.cancel'));
			
			
		};
	
		executeAjaxRequest('plans/template' , 'GET', "", successFunction, formErrorFunction);	  
}

function addChargeCode() {
	maintainTable('chargecode', 'chargecode', 'POST');
	return false;
}


function addTaxMap() {
	maintainTable('taxmap', 'taxmap', 'POST');
	return false;
}

function addEvent()
{
	maintainTable('eventmaster', 'eventmaster', 'POST');return false;
}
function repopulatesEventForm() {
	
	successFunction =  function(data, textStatus, jqXHR) {
		
			var formHtml = $("#eventmasterFormTemplate").render(data);
		
			$("#inputarea").html(formHtml);
	
			$('.datepickerfield').datepicker({constrainInput: true, defaultDate: 0, maxDate: 0, dateFormat: 'dd MM yy'});
			$('.datepickerfieldnoconstraint').datepicker({constrainInput: true, defaultDate: 0, dateFormat: 'dd MM yy'});
		
			$('#addMedia').click(function() {  
				return !$('#notSelectedMedia option:selected').remove().appendTo('#mediaData');  
			});	
			$('#removeMedia').click(function() {  
				return !$('#mediaData option:selected').remove().appendTo('#notSelectedMedia');  
			}); 
			
			
			$('#submitloanapp').button().click(function(e) {
				submitPlanApplication();
			    e.preventDefault();
			});
			$('button#submitPayment span').text(doI18N('dialog.button.submit'));
			$('#cancelloanapp').button().click(function(e) {
				setSubscriptionContent("content");
			    e.preventDefault();
			});
			$('button#cancelloanapp span').text(doI18N('dialog.button.cancel'));
			
			
		};
	
		executeAjaxRequest('eventmaster/template' , 'GET', "", successFunction, formErrorFunction);	  
}

function updatePlan(plan_code)
{
		var linkId = this.id;
		var entityId =plan_code;

		var resourceUrl = "plan" + "s/" + plan_code;
		maintainTable('plan', resourceUrl, 'PUT');
}
function deletePlan(plan_code)
{
		var entityId =plan_code;https://localhost:8443/svn-mifosng-provider/api/v1/eventmasters?_=1368518817713"

			var resourceUrl ="plan" + "s/" + entityId;
			var width = 400; 
			var height = 150;
			var saveSuccessFunction = function(data, textStatus, jqXHR) {
			  	$("#dialog-form").dialog("close");
			  	refreshTableView("plan");
			};
			popupConfirmationDialogAndPost(resourceUrl, 'DELETE', 'dialog.title.confirmation.required', width, height, entityId, saveSuccessFunction);
}

function updateEvent(eventId)
{
		var linkId = this.id;
		var entityId =eventId;

		var resourceUrl = "eventmaster/" + eventId;
		maintainTable('eventmaster', resourceUrl, 'PUT');
}
function deleteEvent(eventId)
{
		var entityId =eventId;https://localhost:8443/svn-mifosng-provider/api/v1/eventmaster?_=1368518817713"

			var resourceUrl ="eventmaster/"  + entityId;
			var width = 400; 
			var height = 150;
			var saveSuccessFunction = function(data, textStatus, jqXHR) {
			  	$("#dialog-form").dialog("close");
			  	refreshTableView("eventmaster");
			};
			popupConfirmationDialogAndPost(resourceUrl, 'DELETE', 'dialog.title.confirmation.required', width, height, entityId, saveSuccessFunction);
}

function viewPricing(plan_code) {
	
	successFunction =  function(data, textStatus, jqXHR) {
	var getUrl ='prices/'+plan_code;

var tableHtml = "<p>Hello</p>";
		var crudObject = new Object();
		crudObject.crudRows = data;
		var html = $("#priceFormListTemplate").render(crudObject);
		$("#listplaceholder").html(html);  
	
		 var oTable=displayListTable("servicestable");
	$('.newpricebtn').button(
	  ).click(function(e) {
		   
		  var getUrl ='prices/template?planId='+plan_code;
		  var postUrl = 'prices/'+ plan_code;
		
	var templateSelector = "#priceFormTemplate";
	var width = 650; 
	var height = 300;
	var saveSuccessFunction = function(data, textStatus, jqXHR) {
	  	$("#dialog-form").dialog("close");
	  	addPricing(plan_code);return false;	
	  
	};
	popupDialogWithFormView(getUrl, postUrl, 'POST', "Add Price", templateSelector, width, height,saveSuccessFunction);
	 e.preventDefault();
	  });
	

	$(".updatePrice").click( function(e) {
		

		var linkId = this.id;
		var entityId = linkId.replace("updatePrice", "");

        var geturl="prices/"+entityId+"/update?template=true";
		var resourceUrl = "price" + "s/" + entityId+"/update";
		var saveSuccessFunction = function(data, textStatus, jqXHR) {
		  	$("#dialog-form").dialog("close");
		  	viewPricing(plan_code);
		  	
		};
		
		popupDialogWithFormView(geturl, resourceUrl, 'PUT', "Edit Price", "#priceFormTemplate", 700,300,saveSuccessFunction);
	  
	});
	
	$(".deletePrice").click( function(e) {
		

		var linkId =this.id;
		var entityId = linkId.replace("deletePrice", "");

		var resourceUrl ="price" + "s/" + entityId;
		var width = 400; 
		var height = 150;
		var saveSuccessFunction = function(data, textStatus, jqXHR) {
		  	$("#dialog-form").dialog("close");
		  	viewPricing(plan_code);
		  	
		};
		popupConfirmationDialogAndPost(resourceUrl, 'DELETE', 'dialog.title.confirmation.required', width, height, entityId, saveSuccessFunction);
	
	});

	};
	executeAjaxRequest('prices/'+plan_code, 'GET', "", successFunction);
}

function addPricing(plannId){
	
		
		  var getUrl ='prices/template?planId='+plannId;
		  var postUrl = 'prices/'+ plannId;
		
	var templateSelector = "#priceFormTemplate";
	var width = 650; 
	var height = 300;
	var saveSuccessFunction = function(data, textStatus, jqXHR) {
	  	$("#dialog-form").dialog("close");
	  	viewPricing(planId);return false;	
	  
	};
	popupDialogWithFormView(getUrl, postUrl, 'POST', "prices", templateSelector, width, height,saveSuccessFunction);
	 e.preventDefault();
	 
}

function viewEventPricing(eventId) {
	successFunction =  function(data, textStatus, jqXHR) {
	var getUrl ='eventprice/'+eventId;

var tableHtml = "<p>Hello</p>";
		var crudObject = new Object();
		crudObject.crudRows = data;
		var html = $("#eventPricingFormListTemplate").render(crudObject);
		$("#listplaceholder").html(html);  
	
		 var oTable=displayListTable("eventPricingtable");
	$('.newpricebtn').button(
	  ).click(function(e) {
		
		  var getUrl ='eventprice/template?eventId='+eventId;
		  var postUrl = 'eventprice/'+ eventId;
		
	var templateSelector = "#eventPriceFormTemplate";
	var width = 650; 
	var height = 300;
	var saveSuccessFunction = function(data, textStatus, jqXHR) {
	  	$("#dialog-form").dialog("close");
	  	addEventPricing(eventId);return false;	
	  
	};
	popupDialogWithFormView(getUrl, postUrl, 'POST', "Add Event Price", templateSelector, width, height,saveSuccessFunction);
	 e.preventDefault();
	  });
	

	$(".updateEventPrice").click( function(e) {
		

		var linkId = this.id;
		var entityId = linkId.replace("updateEventPrice", "");

        var geturl="eventprice/"+entityId +"/update";
		var resourceUrl = "eventprice/" + entityId+"/update";
		var saveSuccessFunction = function(data, textStatus, jqXHR) {
		  	$("#dialog-form").dialog("close");
		  	viewEventPricing(eventId);
		  	
		};
		
		popupDialogWithFormView(geturl, resourceUrl, 'PUT', "Update Price", "#eventPriceFormTemplate", 700,300,saveSuccessFunction);
	  
	});
	
	$(".deleteEventPrice").click( function(e) {
		

		var linkId =this.id;
		var entityId = linkId.replace("deleteEventPrice", "");

		var resourceUrl ="eventprice/" + entityId;
		var width = 400; 
		var height = 150;
		var saveSuccessFunction = function(data, textStatus, jqXHR) {
		  	$("#dialog-form").dialog("close");
		  	viewEventPricing(eventId);
		  	
		};
		popupConfirmationDialogAndPost(resourceUrl, 'DELETE', 'dialog.title.confirmation.required', width, height, entityId, saveSuccessFunction);
	
	});

	};
	executeAjaxRequest('eventprice/'+eventId, 'GET', "", successFunction);
}


function addItem()
{
	maintainTable('item','items', 'POST');
}
function setBillingFrequency(planCode) {
	removeErrors("#formerrors");
	 $("#contractPeriod").removeAttr("disabled");
	 $('#paytermCode').show();
		$("#anyDayAllowed").show();
		$('label[for="paytermCode"]').show();
		$('label[for="anyDayAllowed"]').show();
	var htmlvar=$("#allBillingFreqsDropdownTemplate").render('');
	$("#frequencyDiv").html(htmlvar);
var successFunction = function(data, textStatus, jqXHR) {
	var htmlvar=$("#allBillingFreqsDropdownTemplate").render(data);
	$("#frequencyDiv").html(htmlvar);
	
	if(data.isPrepaid == "Y"){
	var theText=data.contractPeriod;
	$("#contractPeriod option:contains(" + theText + ")").attr('selected', 'selected');
	
//	$("#contractPeriod").find("2 Weeks").attr("selected", "selected");
	$('#paytermCode').hide();
	$("#anyDayAllowed").hide();
	$('label[for="paytermCode"]').hide();
	$('label[for="anyDayAllowed"]').hide();
	$("#contractPeriod").attr("disabled","disabled");
	var t=$("#contractPeriod").val();
	
	}
};
executeAjaxRequest('orders/'+planCode+'/template', 'GET', "", successFunction, formErrorFunction);
//executeAjaxRequest('orders/'+plancode+'/template', 'GET', "","#orderFormTemplate", successFunction, formErrorFunction);

}
function updatePrice(id,clientId){
	
	var clientUrl = 'clients/' + clientId;
	
	var postUrl = 'orders/'+id+'/orderprice';
	
	var templateSelector = "#orderPriceFormListTemplate";
	
	 var serializedArray = {};
	 
    	serializedArray["price"] = $('#price'+id).val();
    	serializedArray["locale"] = $('#locale').val();
			var newFormData = JSON.stringify(serializedArray);
	var saveSuccessFunction = function(data, textStatus, jqXHR) {
		//$("#dialog-form").dialog("close");
		alert('price updated successfully');
		
		refreshClientOrders(clientUrl);

	};
executeAjaxRequest(postUrl, 'PUT', newFormData, saveSuccessFunction, formErrorFunction);

			
	//popupDialogWithFormView("", postUrl, 'PUT', "paymodes", templateSelector, width, height,saveSuccessFunction);
	e.preventDefault();
}
function attachedlink(ticketId)
{

		var linkId = this.id;
		var entityId =ticketId;
		var getUrl = "ticketmaster" + "s/" + ticketId+"/print";
		executeAjaxOctetStreamDownloadRequest(getUrl);
}

function addAddress(clientId)
{
	var getUrl='address/template';
	  var postUrl='address/'+clientId;
		var templateSelector = "#addressFormTemplate";
		var width = 750; 
		var height = 350;
		var saveSuccessFunction = function(data, textStatus, jqXHR) {
			$("#dialog-form").dialog("close");
			showILClient(clientId);
		};
		popupDialogWithFormView(getUrl,postUrl, 'POST', "Address", templateSelector, width, height,saveSuccessFunction);
		//e.preventDefault();
}

function editAddress(clientId,addrId){
	
	
	var getUrl='address/details/'+clientId;
	  var postUrl='address/'+addrId;
		var templateSelector = "#addressFormTemplate";
		var width = 750; 
		var height = 350;
		var saveSuccessFunction = function(data, textStatus, jqXHR) {
			$("#dialog-form").dialog("close");
			showILClient(clientId);
		};
		popupDialogWithFormView(getUrl,postUrl, 'PUT', "Update Address", templateSelector, width, height,saveSuccessFunction);
		//e.preventDefault();
}

function showTickets(){
	
	var postUrl = 'tickets/assignedTickets';
	var onListRetrievialSuccessFunction = function(data) {
	var ticketsListObject = new Object();
	ticketsListObject.crudRows = data;
    
	var tableHtml = "<p>Hello</p>";
	tableHtml = $("#ticketsListTemplate1").render(ticketsListObject);
	$("#content").html(tableHtml);
	var oTable = displayListTable("ticketslisttable");
				refreshClientTicketDetails(clientUrl);
	};

	executeAjaxRequest(postUrl, 'GET', "", onListRetrievialSuccessFunction, formErrorFunction);
}

function changeStatus(){

	var e = document.getElementById("status");
	var status = e.options[e.selectedIndex].value;
	
var tableHtml = "Format:[<p>";
if(status == "Adjustments"){
	
		 tableHtml+= "Adjustment Date,Adjustment Code*Adjustment Amount,Adjustment Type*,Remarks ";
	}else if(status == "Payments"){
		 tableHtml+= "Client Id*,Payment Code*,Payment Date*,Amount,Remarks ";
	}else{
		 tableHtml+= "Item MasterId*,Serial Number*,GrnId*<br>Provisionig SerilaNumber,<br>Quality,status,Warranty,<br>remarks" ;
	}
		 tableHtml+="</p>]"
	   	$("#adj").html(tableHtml);

}

function addBatch() {
	maintainTable('batch', 'batchs', 'POST');
	return false;
}
function refreshJobSchedulingDetails(divName){

	
	//var clientId = clientUrl.replace("clients/", "");
    var getUri='jobschedules';//clientId

	
	var successFunction =  function(data, textStatus, jqXHR) {
	
		var crudObject = new Object();
			crudObject.crudRows = data;
		
			var htmlvar = $("#jobscheduleListTemplate").render(crudObject);
			//$("#inventorygrntab").html(html);  
		
			$("#" + divName).html(htmlvar);
			//var oTable = displayListTable("uploadstatustable");
			
			var oTable = displayListTable("jobschedulestable");
			oTable.fnFilter('');
			
			
			var editClientIdentifierSuccessFunction = function(data, textStatus, jqXHR) {
			  	$("#dialog-form").dialog("close");
			  	refreshJobSchedulingDetails(clientUrl);
			}
			
			
			$(".addnewjobschedule").click( function(e) {
				
				var getUrl='jobschedules/template';
				var postUrl='jobschedules';//+clientId;
				var templateSelector = "#jobscheduleFormTemplate";
			
				var width = 700; 
				var height = 250;
			

			
			
			
			var saveSuccessFunction = function(data, textStatus, jqXHR) {
				$("#dialog-form").dialog("close");
				refreshJobSchedulingDetails(divName);
			};
			
			popupDialogWithFormView(getUrl,postUrl, 'POST', "Scheduling Batch Jobs", templateSelector, width, height,saveSuccessFunction);
			
			e.preventDefault();
			
			});
			
			
				}

  		executeAjaxRequest(getUri, 'GET', "", successFunction, formErrorFunction);	  

}


function addMessages(){
	successFunction =  function(data, textStatus, jqXHR) {		
    var crudObject = new Object();
    crudObject.crudRows = data;
 	var html = $("#messageFormListTemplate").render(crudObject);
 
    $("#listplaceholder").html(html);  
          var oTable=displayListTable('messagetable');
    $(".addMessages").click( function(e) {

      // var getServicesSuccessFunction = function(data, textStatus, jqXHR) {
			  launchMessageDialog(crudObject);
		//};	
		//executeAjaxRequest('messages/template', 'GET', "", getServicesSuccessFunction, formErrorFunction);
    	e.preventDefault();

	    });
	
	    $(".updateMessage").click(function(e) {
	    var linkId = this.id;
        var entityId = linkId.replace("updateMessage", "");
		var getAndPutUrl = 'messages/' + entityId;
		var templateSelector = "#messageFormTemplate";
		var width = 600; 
		var height = 350;
		
		var saveSuccessFunction = function(data, textStatus, jqXHR) {
		
			$("#dialog-form").dialog("close");
			 launchMessageDialog(data);
		}
		
		executeAjaxRequest(getAndPutUrl, 'GET', "", saveSuccessFunction, formErrorFunction);
	    e.preventDefault();
	});
	
	$(".deleteMessage").click( function(e) {

        	var linkId =this.id;
         	var entityId = linkId.replace("deleteMessage", "");

           var resourceUrl ="messages/" + entityId;
                  var width = 400; 
                	var height = 150;
           var saveSuccessFunction = function(data, textStatus, jqXHR) {
          	$("#dialog-form").dialog("close");
          	 addMessages();	
            };
           
         popupConfirmationDialogAndPost(resourceUrl, 'DELETE', 'dialog.title.confirmation.required', width, height, entityId, saveSuccessFunction);

    });
}

function launchMessageDialog(data){

			var dialogDiv = $("<div id='dialog-form'></div>");
			var saveButton = doI18N('dialog.button.save');
			var cancelButton = doI18N('dialog.button.cancel');
			
			var buttonsOpts = {};
			var entityId=data.id;
			buttonsOpts[saveButton] = function() {
				submitTabbedMessage(dialogDiv,entityId);//need to update
			};
			buttonsOpts[cancelButton] = function() {$(this).dialog( "close" );};
			var titleCode = 'Add Message';
			dialogDiv.dialog({
		  		title: doI18N(titleCode), 
		  		width: 1100, 
		  		height: 550, 
		  		modal: true,
		  		buttons: buttonsOpts,
		  		close: function() {
		  			
		  			$(this).remove();
				},
		  		open: function (event, ui) {
		  		
		  			var formHtml = $("#messageFormTemplate").render(data);
		  			dialogDiv.html(formHtml);
		  			
		  			handleAddOnsTabMessageSelection(data);

		  			$('.datepickerfield').datepicker({constrainInput: true, defaultDate: 0, maxDate: 0, dateFormat: custom.datePickerDateFormat});
					$('.datepickerfieldnoconstraint').datepicker({constrainInput: true, defaultDate: 0, dateFormat: custom.datePickerDateFormat});
		  		}
		  	}).dialog('open');
	}

  function handleAddOnsTabMessageSelection(data) {

       var baseObject = new Object();
        baseObject.services = data.messageParams;
        var servicesSize=0;

        if(data.messageParams!=null){
        $.each(data.messageParams,function(i,item){

        servicesSize = data.messageParams[i].deleteButtonId;
      	baseObject.parameter = "parameter" + servicesSize;
        baseObject.param=data.messageParams[i].parameter;
        baseObject.deleteButtonId ="deleteButtonId" + data.messageParams[i].deleteButtonId;
        baseObject.activity = "Remove this Debit Entry";
        var serviceTemplateHtml = $("#messageparamFormTemplate").render(baseObject);

        $("#messageparameters").append(serviceTemplateHtml);

//onclick funtion for newly added delete button

         $("#" + baseObject.deleteButtonId).button({
           icons : {
	                   primary : "ui-icon-cancel"
                    },
          text:false
          }).click(function(e) {
         if( servicesSize > 0 ) {
                $(this).parents('p').remove();
		        }
	     e.preventDefault();
       });
    });
  };

$("#addAddOnmessagedetails").button({
	text : false,	
	icons : {
	primary : "ui-icon-plusthick"
	}
	}).click(function(e) {

	servicesSize = servicesSize + 1;
	baseObject.parameter = "parameter" + servicesSize;
    baseObject.deleteButtonId = "deleteButtonId" + servicesSize;
	baseObject.activity = "Remove this Debit Entry";
	baseObject.param="";
	var serviceTemplateHtml = $("#messageparamFormTemplate").render(baseObject);

	$("#messageparameters").append(serviceTemplateHtml);

	$("#" + baseObject.deleteButtonId).button({
 	icons : {
	primary : "ui-icon-cancel"
    },
	text:false
	}).click(function(e) {
	if( servicesSize > 0 ) {
        $(this).parents('p').remove();
		}
	e.preventDefault();
});
e.preventDefault();
});
}

function submitTabbedMessage(divContainer,entityId) {
		
		var serializationOptions = {};
		serializationOptions["checkboxesAsBools"] = true;					
		var serializedArray = {};					
		serializedArray = $('#entityform').serializeObject(serializationOptions);
		serializedArray["templateDescription"] = $('#templateDescription').val();
		serializedArray["subject"] = $('#subject').val();
		serializedArray["header"] = $('#header').val();
		serializedArray["body"] = $('#body').val();
		serializedArray["footer"] = $('#footer').val();
		
	   	var populateaddOnServicesArray = function(messageParams){
	   		serializedArray[messageParams] = new Array();
	   		$("#messageparameters").children('p').each(function (i) {
	   		// "this" is the current element in the loop
	   		var tempObject= new Object();
		    $(this).children('label').each(function(j){  
		        if(j==0){
		    		tempObject.parameter=$("#"+$(this).attr("for")).val();
		    	}
		    }); 
		    serializedArray[messageParams][i]=tempObject;
			});
	   	}
	   	populateaddOnServicesArray("messageParams");					
		var newFormData = JSON.stringify(serializedArray);                  
		var successFunction =  function(data, textStatus, jqXHR) {
			divContainer.dialog("close");
			addMessages();
		};
		if(entityId!=null){
			executeAjaxRequest('messages/'+entityId, "PUT", newFormData, successFunction, formErrorFunction);
			}
			else{
			executeAjaxRequest('messages'  , "POST", newFormData, successFunction, formErrorFunction);
			}
	}
       executeAjaxRequest('messages/template' , 'GET', "", successFunction, formErrorFunction);	 
}


function addProspect() {
	maintainTable('prospect', 'prospects', 'POST');
	return false;
}
function appendProspectClient(prosId){
	var getUrl='prospects/'+prosId;
	  var postUrl='prospects/'+prosId+'/template';
		var templateSelector = "#prospectdetailFormTemplate";
		var width = 750; 
		var height = 350;
		var saveSuccessFunction = function(data, textStatus, jqXHR) {
			$("#dialog-form").dialog("close");
			refreshTableView('prospect');
		};
		popupDialogWithFormView(getUrl,postUrl, 'PUT', "Append Client", templateSelector, width, height,saveSuccessFunction);

}

function cancelProspectClient(prospectCancleId){
var getUrl='prospects/cancel/'+prospectCancleId;
var postUrl='prospects/'+prospectCancleId;
var templateSelector = "#cancelprospectFormTemplate";
var width = 400; 
var height = 250;
var saveSuccessFunction = function(data, textStatus, jqXHR) {
		$("#dialog-form").dialog("close");
		refreshTableView('prospect');
	};
	popupDialogWithFormView(getUrl,postUrl, 'PUT', "Delete Client", templateSelector, width, height,saveSuccessFunction);
}

function convertProspectClient(clientId){
	alert("functionality under development  !");
}

function viewHistoryOfProspect(prospectHistoryId){

var geturl="prospects/"+prospectHistoryId+"/history";
var width = 800; 
var height = 350;
var saveSuccessFunction =  function(data, textStatus, jqXHR) {
	var crudObject = new Object();
		crudObject.crudRows = data;
		var html = $("#mytable").render(crudObject);
};
popupDialogWithFormView(geturl, "", 'GET', "History", "#prospecthistoryFormTemplate", width,height,saveSuccessFunction);
};

function tabs() {
    // setup ul.tabs to work as tabs for each div directly under div.panes
    $("ul.tabs").tabs("div.panes > div");
}


function setInventoryContent(divName) {
	//get a list of all offices (as this is required by most accounting subtabs)
	
	  var getUri='items';//clientId
	var successFunction = function(data, textStatus, jqXHR) {
		
		$("#" + divName).html($("#inventoryHomeTemplate").render());
		$("#inventorytabs").tabs({
			
			select : function(event, tab) {
				
				fetchInventoryTabContent(tab.index);
				
			}
		});
		var fetchInventoryTabContent = function(index) {
		
			if (index == 0) {
				//refreshInventoryItems();
			
			refreshInventoryGrn1(data);
			}
			else if (index == 1) {
				refreshSupplier();
				
				
			}else if (index == 2) {
				refreshInventoryGrn();
				
			}else if (index == 3){
				refreshInventoryItemDetails(divName); 
			
			}else if (index == 4){
				refreshMRNDetails();
				
			} else if (index == 5){
				refreshMRNDetailsHistory();
			}
		}
		//determine which tab is initially selected and load data for the same
		var selected = $("#inventorytabs").tabs('option', 'selected');
		fetchInventoryTabContent(selected);
	}
	executeAjaxRequest(getUri, 'GET', "", successFunction, formErrorFunction);
}

function convertProspectToClient(clientProspectId){

	
	
	
	var resourceUrl = "prospects/converttoclient/"+clientProspectId;
		
		var width = 400; 
		var height = 150;
		var saveSuccessFunction = function(data, textStatus, jqXHR) {
			  $("#dialog-form").dialog("close");
			  refreshTableView('prospect');
		};
		popupConfirmationDialogAndPost(resourceUrl, 'POST', 'dialog.title.confirmation.required', width, height, clientProspectId, saveSuccessFunction);
	
}

function refreshOwnedHardwareDetails(clientUrl)
{
	
	var clientId = clientUrl.replace("clients/", "");
      var getUri="ownedhardware/"+clientId;
      clientIdForOneTimesale = clientId;
		var successFunction =  function(data, textStatus, jqXHR) {
			
		var crudObject = new Object();
			crudObject.crudRows = data;
			
			var html = $("#ownedhardwareListTemplate").render(crudObject);
			$("#ownedhardwaretab").html(html);  
			
		 
			
			var oTable = displayListTable("ownedhardwaretable");
			oTable.fnFilter('');
			
			
			
				
			var editClientIdentifierSuccessFunction = function(data, textStatus, jqXHR) {
			  	$("#dialog-form").dialog("close");
			  	refreshClientOrders(clientUrl);
			}
		
		
			$("#newownedhardware").click( function(e) {

			var getUrl='ownedhardware/template';
		  	var postUrl='ownedhardware/'+clientId;
			var templateSelector = "#ownedhardwareFormTemplate";
			var width = 570; 
			var height = 300;
			var saveSuccessFunction = function(data, textStatus, jqXHR) {
				$("#dialog-form").dialog("close");
				refreshOwnedHardwareDetails(clientUrl);
			//	showILClient(clientId);
				

			};//end of saveSuccessFunction
			popupDialogWithFormView(getUrl,postUrl, 'POST', "Owned Hardware", templateSelector, width, height,saveSuccessFunction);
			e.preventDefault();
			
			});//end of click 
			
			 
			
			
		}//end of successunction
  		
  		executeAjaxRequest(getUri, 'GET', "", successFunction, formErrorFunction);	  
}
function setDisableButton(value){
    var button = $(".ui-dialog-buttonpane button:contains('SaveOther')");
    var button1 = $(".ui-dialog-buttonpane button:contains('Save')");
     if(value==="PRIMARY"){   
                   $(button1).button('enable');
                   $(button).button("disable");   
     
     }else if(!(value==="PRIMARY")){
                   	 $(button1).button("disable"); 	
					 $(button).button("enable");
					
     }
     else{
			       $(button1).button('enable');
			       $(button).button("enable");
     }
  }		


function setCountryandState(){
	
	 setTimeout(function(){
         var successFunction =  function(data, textStatus, jqXHR) {                       
                 $('#entityform #state').val(data.state);
                 $('#entityform #country').val(data.country);            
					};			
		    var value=$('#entityform #city').val();	
		  
        executeAjaxRequest('address/template/' + value  , 'GET', "", successFunction, formErrorFunction);
     },600);
  
  }


function setCountryandStateForProspect(){
	
	 setTimeout(function(){
        var successFunction =  function(data, textStatus, jqXHR) {                       
                $('#entityform #state').val(data.state);
                $('#entityform #country').val(data.country);            
					};			
		    var value=$('#entityform #cityDistrict').val();	
		  
       executeAjaxRequest('address/template/' + value  , 'GET', "", successFunction, formErrorFunction);
    },600);
 
 }


function addEventPricing(eventId){
	
		
		  var getUrl ='eventprice/template?eventId='+eventId;
		  var postUrl = 'eventprice/'+ eventId;
		
	var templateSelector = "#eventPriceFormTemplate";
	var width = 650; 
	var height = 300;
	var saveSuccessFunction = function(data, textStatus, jqXHR) {
	  	$("#dialog-form").dialog("close");
	  //	viewEventPricing(eventId);return false;	
	  
	};
	popupDialogWithFormView(getUrl, postUrl, 'POST', "Add Event Price", templateSelector, width, height,saveSuccessFunction);
	 e.preventDefault();
	  }





function addMedias(){

        successFunction =  function(data, textStatus, jqXHR) {		
        var crudObject = new Object();
        crudObject.crudRows = data;
        var html = $("#mediaFormListTemplate").render(crudObject);
        $("#listplaceholder").html(html);  
        var oTable=displayListTable('mediatable');
       
      $(".updateMedia").click(function(e) {
     
 	    var linkId = this.id;
 	   
         var entityId = linkId.replace("updateMedia", "");
      
		    var successFunction = function(data, textStatus, jqXHR) {		
		    			
				$("#dialog-form").dialog("close");
				 launchOrderDialog(data,entityId,"Edit Media");
			}					
			
		    executeAjaxRequest('assets/'+entityId, 'GET', "", successFunction, formErrorFunction);
		    e.preventDefault();
		    }); 
		      
     $(".addmediass").click( function(e) {	
        var getServicesSuccessFunction = function(data, textStatus, jqXHR) {
				  launchOrderDialog(data,null,"Add Media");
			};	
			executeAjaxRequest('assets/template', 'GET', "", getServicesSuccessFunction, formErrorFunction);
	    	e.preventDefault();
        });
    
		
		$(".deleteMedia").click( function(e) {

         var linkId =this.id;
         var entityId = linkId.replace("deleteMedia", "");	                
         var resourceUrl ="assets/" + entityId;		           
         var width = 400; 
         var height = 150;
         var saveSuccessFunction = function(data, textStatus, jqXHR) {
         $("#dialog-form").dialog("close");
           	 addMedias();	
          };		               
        
        popupConfirmationDialogAndPost(resourceUrl, 'DELETE', 'dialog.title.confirmation.required', width, height, entityId, saveSuccessFunction);
        // popupConfirmationDialogAndPost('assets/'+entityId, 'DELETE', 'dialog.title.confirmation.required', width, height, entityId, saveSuccessFunction);	
         });

  };

  function launchOrderDialog(data,id,titlecode){		
				var dialogDiv = $("<div id='dialog-form'></div>");
				var saveButton = doI18N('dialog.button.save');
				var cancelButton = doI18N('dialog.button.cancel');						
				var entityId=id;			
				var buttonsOpts = {};
				buttonsOpts[saveButton] = function() {						   
					submitTabbedOrder(dialogDiv,entityId);//need to update
				};
				// end of buttonsOpts for save button
				
				buttonsOpts[cancelButton] = function() {$(this).dialog( "close" );};
			//	var titleCode = 'Add Media';
				dialogDiv.dialog({
			  		title: doI18N(titlecode), 
			  		width: 1100, 
			  		height: 550, 
			  		modal: true,
			  		buttons: buttonsOpts,
			  		close: function() {
			  			$(".myclass").attr("disabled", false);
			  			// if i dont do this, theres a problem with errors being appended to dialog view second time round
			  			$(this).remove();
					},
			  		open: function (event, ui) {
			  	    	if(entityId!=null){
			  			var baseObject = new Object();
			  			baseObject=data.mediaAssetData;
			  			baseObject.mediaStatus=data.mediaStatus;
			  			baseObject.mediaTypeData=data.mediaTypeData;
			  			baseObject.mediaCategeorydata=data.mediaCategeorydata;					  		
			  			var formHtml = $("#mediaFormTemplate").render(baseObject);
			  			dialogDiv.html(formHtml);					  		
			  			handleAddOnsTabSelection(data);
			  			}
			  			else{
			  			var formHtml = $("#mediaFormTemplate").render(data);
			  			dialogDiv.html(formHtml);					  			
			  			handleAddOnsTabSelectionforCreate(data);					  			
			  			}
			  			$('.datepickerfield').datepicker({constrainInput: true, defaultDate: 0, maxDate: 0, dateFormat: custom.datePickerDateFormat});
						$('.datepickerfieldnoconstraint').datepicker({constrainInput: true, defaultDate: 0, dateFormat: custom.datePickerDateFormat});
			  		}
			  	}).dialog('open');
			
		}

function handleAddOnsTabSelection(data) {
      
     	var baseObject = new Object();
     	baseObject.mediaAttributesdata = data.mediaAttributes;
     	baseObject.services = data.mediaassetAttributes;
     	
         var servicesSize=0;
         if(data.mediaassetAttributes!=null){
         $.each(data.mediaassetAttributes,function(i,item){
        
         servicesSize=servicesSize+i;
         //servicesSize = data.mediaassetAttributes[i].deleteButtonId;	                
       	baseObject.attributeType = "attributeType" + servicesSize;
         baseObject.attributeName = "attributeName" + servicesSize;
         
      	baseObject.attributevalue = "attributevalue" + servicesSize;
        	baseObject.attributeNickname = "attributeNickname" + servicesSize;
      	baseObject.attributeImage = "attributeImage" + servicesSize;

	        baseObject.Name=data.mediaassetAttributes[i].attributeName;
	        baseObject.Value=data.mediaassetAttributes[i].attributeValue;
	        baseObject.Nickname=data.mediaassetAttributes[i].attributeNickname;
	        baseObject.Image=data.mediaassetAttributes[i].attributeImage;
	        baseObject.deleteButtonId ="deleteButtonId" + servicesSize;
	        baseObject.activity = "Remove this Debit Entry";
	        var serviceTemplateHtml = $("#mediadetailsFormTemplate").render(baseObject);
	        $("#mediadetails").append(serviceTemplateHtml);
	        baseObject.Name="";
	        baseObject.Value="";
	        baseObject.Nickname="";
	        baseObject.Image="";
	         $("#" + baseObject.deleteButtonId).button({
	           icons : {
		                   primary : "ui-icon-cancel"
	                    },
	          text:false
	          }).click(function(e) {
	         if( servicesSize > 0 ) {
                 $(this).parents('p').remove();
		        }
 	     e.preventDefault();
 	    
	       });
     });
    
   };

//for media Details add button
  
        $("#addAddOnmediadetails").button({
        text : false,	
        icons : {
        primary : "ui-icon-plusthick"
        }
        }).click(function(e) {
         servicesSize=servicesSize+1;
        	baseObject.attributeType = "attributeType" + servicesSize;
         baseObject.attributeName = "attributeName" + servicesSize;
      	baseObject.attributevalue = "attributevalue" + servicesSize;
        	baseObject.attributeNickname = "attributeNickname" + servicesSize;
      	baseObject.attributeImage = "attributeImage" + servicesSize;
         baseObject.deleteButtonId = "deleteButtonId" + servicesSize;
      	baseObject.activity = "Remove this Debit Entry";
      	var serviceTemplateHtml = $("#mediadetailsFormTemplate").render(baseObject);
     	$("#mediadetails").append(serviceTemplateHtml);
     	
//onclick funtion for newly added delete button

	         $("#" + baseObject.deleteButtonId).button({
	         icons : {
		     primary : "ui-icon-cancel"
	         },
	         text:false
          }).click(function(e) {
		     if( servicesSize > 0 ) {
               $(this).parents('p').remove();
	         }
 	     e.preventDefault();
	        });
	         e.preventDefault();
	       
      });
   

//for mediaLocation add button
    
       
	       baseObject.serviceslocation = data.mediaLocationData;
	       baseObject.servicesmediaFormat = data.mediaFormat;
	       baseObject.servicesLanguageData = data.mediaLanguageData;
	      
       if(data.mediaLocationData!=null){
         $.each(data.mediaLocationData,function(i,item){	        
         servicesSize = servicesSize + 1;
        
       	baseObject.languageId = "languageId" + servicesSize;
         baseObject.formatType = "formatType" + servicesSize;
      	baseObject.location = "location" + servicesSize;		           	

	        baseObject.LanguageId=data.mediaLocationData[i].languageId;
	        baseObject.FormatType=data.mediaLocationData[i].formatType;
	        baseObject.Location=data.mediaLocationData[i].location;			    
         baseObject.deleteButtonId ="deleteButtonId" + servicesSize;
	        baseObject.activity = "Remove this Debit Entry";
	        var serviceTemplateHtml = $("#mediaAssetLocationFormTemplate").render(baseObject);
	        $("#medialocation").append(serviceTemplateHtml);						      
	        baseObject.LanguageId="";
	        baseObject.FormatType="";
	        baseObject.Location="";
	       
	          $("#" + baseObject.deleteButtonId).button({
	           icons : {
		                   primary : "ui-icon-cancel"
	                    },
	          text:false
	          }).click(function(e) {
	         if( servicesSize > 0 ) {
                 $(this).parents('p').remove();
		        }
 	     e.preventDefault();
 	    
	       });
     });
   };
	       
//newly added medialocation buttons	        
        $("#addAddOnmedialocation").button({
        text : false,	
        icons : {
        primary : "ui-icon-plusthick"
        }
        }).click(function(e) {
	    
	       servicesSize = servicesSize + 1;
	       baseObject.languageId = "languageId" + servicesSize;
        baseObject.formatType = "formatType" + servicesSize;
	       baseObject.location = "location" + servicesSize;
	       baseObject.deleteButtonId = "deleteButtonId" + servicesSize;
	       baseObject.activity = "Remove this Debit Entry";
	       var serviceTemplateHtml = $("#mediaAssetLocationFormTemplate").render(baseObject);
	       $("#medialocation").append(serviceTemplateHtml);
	       
//onclick funtion for newly added delete button

	       $("#" + baseObject.deleteButtonId).button({
	       icons : {
	            	primary : "ui-icon-cancel"
	       },
	       text:false
	       }).click(function(e) {
		   if( servicesSize > 0 ) {
         $(this).parents('p').remove();
		  }
 	  e.preventDefault();
	      });
	      e.preventDefault();
      });
    
    }
    
    
    //new code 5-07-13
    
function handleAddOnsTabSelectionforCreate(data) {                   
     	var baseObject = new Object();
     	baseObject.mediaAttributesdata = data.mediaAttributes;      
        var servicesSize=0;		        

//for media Details add button
  
        $("#addAddOnmediadetails").button({
        text : false,	
        icons : {
        primary : "ui-icon-plusthick"
        }
        }).click(function(e) {
         servicesSize=servicesSize+1;
           
        	baseObject.attributeType = "attributeType" + servicesSize;
         baseObject.attributeName = "attributeName" + servicesSize;
      	baseObject.attributevalue = "attributevalue" + servicesSize;
        	baseObject.attributeNickname = "attributeNickname" + servicesSize;
      	baseObject.attributeImage = "attributeImage" + servicesSize;
         baseObject.deleteButtonId = "deleteButtonId" + servicesSize;
      	baseObject.activity = "Remove this Debit Entry";
      	var serviceTemplateHtml = $("#mediadetailsFormTemplate").render(baseObject);
     	$("#mediadetails").append(serviceTemplateHtml);
     	
//onclick funtion for newly added delete button

	         $("#" + baseObject.deleteButtonId).button({
	         icons : {
		     primary : "ui-icon-cancel"
	         },
	         text:false
          }).click(function(e) {
		     if( servicesSize > 0 ) {
               $(this).parents('p').remove();
	         }
 	     e.preventDefault();
	        });
	         e.preventDefault();
	       
      });
   

//for mediaLocation add button
    
     // var baseObject = new Object();
	       baseObject.servicesmediaFormat = data.mediaFormat;
	       baseObject.servicesLanguageData = data.mediaLanguageData;
	      
      
//newly added medialocation buttons	        
        $("#addAddOnmedialocation").button({
        text : false,	
        icons : {
        primary : "ui-icon-plusthick"
        }
        }).click(function(e) {
	    
	       servicesSize = servicesSize + 1;
	       baseObject.languageId = "languageId" + servicesSize;
        baseObject.formatType = "formatType" + servicesSize;
	       baseObject.location = "location" + servicesSize;
	       baseObject.deleteButtonId = "deleteButtonId" + servicesSize;
	       baseObject.activity = "Remove this Debit Entry";
	       var serviceTemplateHtml = $("#mediaAssetLocationFormTemplate").render(baseObject);
	       $("#medialocation").append(serviceTemplateHtml);
	       
//onclick funtion for newly added delete button

	       $("#" + baseObject.deleteButtonId).button({
	       icons : {
	            	primary : "ui-icon-cancel"
	       },
	       text:false
	       }).click(function(e) {
		   if( servicesSize > 0 ) {
         $(this).parents('p').remove();
		  }
 	  e.preventDefault();
	      });
	      e.preventDefault();
      });
    
    }
    
    

function submitTabbedOrder(divContainer,entityId) {
							
			var serializationOptions = {};
			serializationOptions["checkboxesAsBools"] = true;
			
			var serializedArray = {};
			
			serializedArray = $('#entityform').serializeObject(serializationOptions);
 		serializedArray["mediaTitle"] = $('#mediaTitle').val();		    		
 		serializedArray["mediaType"] = $('#mediaType').val();
 		serializedArray["mediaCategoryId"] = $('#mediaCategoryId').val();
 		serializedArray["image"] = $('#image').val();
 		serializedArray["duration"] = $('#duration').val();
 		serializedArray["Genre"] = $('#Genre').val();
 		serializedArray["subject"] = $('#subject').val();
 		serializedArray["contentProvider"] = $('#contentProvider').val();
 		serializedArray["rated"] = $('#rated').val();
 		serializedArray["rating"] = $('#rating').val();
 		serializedArray["status"] = $('#status').val();
 		serializedArray["releasingDate"] = $('#releasingDate').val();
 		serializedArray["overview"] = $('#overview').val();
 		
 	   	var populateaddOnServicesArray1 = function(mediaassetAttributes){
 	   		serializedArray[mediaassetAttributes] = new Array();
 	   		$("#mediadetails").children('p').each(function (i) {
 	   		// "this" is the current element in the loop
 	   		var tempObject= new Object();
 		    $(this).children('label').each(function(j){  
 		        if(j==0){
 		    		tempObject.attributeType=$("#"+$(this).attr("for")).val();
 		    	}if(j==1){
 		    		tempObject.attributeName=$("#"+$(this).attr("for")).val();
 		    	}if(j==2){
 		    		tempObject.attributevalue=$("#"+$(this).attr("for")).val();
 		    	}if(j==3){
 		    		tempObject.attributeNickname=$("#"+$(this).attr("for")).val();
 		    	}if(j==4){
 		    		tempObject.attributeImage=$("#"+$(this).attr("for")).val();
 		    	}
 		    }); 
 		    serializedArray[mediaassetAttributes][i]=tempObject;
 			});
 	   	}
 	   	populateaddOnServicesArray1("mediaassetAttributes");
 	   	
 	   		var populateaddOnServicesArray2 = function(mediaAssetLocations){
 	   		serializedArray[mediaAssetLocations] = new Array();
 	   		$("#medialocation").children('p').each(function (i) {
 	   		// "this" is the current element in the loop
 	   		var tempObject= new Object();
 		    $(this).children('label').each(function(j){
 		    	if(j==0){
 		    		tempObject.languageId=$("#"+$(this).attr("for")).val();
 		    	}if(j==1){
 		    		tempObject.formatType=$("#"+$(this).attr("for")).val();
 		    	}if(j==2){
 		    		tempObject.location=$("#"+$(this).attr("for")).val();
 		    	}
 		    }); 
 		    serializedArray[mediaAssetLocations][i]=tempObject;
 			});
 	   	}
 	   	populateaddOnServicesArray2("mediaAssetLocations");
			
			var newFormData = JSON.stringify(serializedArray);
			var successFunction =  function(data, textStatus, jqXHR) {
				divContainer.dialog("close");
				addMedias();
			};
			if(entityId!=null){
			    executeAjaxRequest('assets/'+entityId  , "PUT", newFormData, successFunction, formErrorFunction);
			}else{
				executeAjaxRequest('assets'  , "POST", newFormData, successFunction, formErrorFunction);
		    }
		}
		executeAjaxRequest('assets/mediadata' , 'GET', "", successFunction, formErrorFunction);	 
}		
		
	function addCurrency(){
		
		
		maintainTable('countrycurrency', 'countrycurrencys', 'POST');return false;
	}
	
	
	function addregion(){
		maintainTable('region', 'regions', 'POST');return false;
		
	}
	
	function updateOrderPrice(clientId){
		 var clientUrl = 'clients/' + clientId;
			
			var entityId =$('input:radio[name=selectedorder]:checked').val();
	       
		
 			var getUrl ="order" + "s/" + entityId+"/orderprice/"+clientId;
 			var postUrl="order" + "s/orderprice";
 			var width = 400; 
 			var height = 150;
 			
 			var formErrorFunction = function(jqXHR, textStatus, errorThrown) {
 				handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
 			}
 			var saveSuccessFunction = function(data, textStatus, jqXHR) {
 			  	$("#dialog-form").dialog("close");

 			  	refreshClientOrders(clientUrl);
 			  	
 			  	
 			};
 			popupDialogWithFormView(getUrl,postUrl, 'PUT', "Price Details", "#orderPriceFormListTemplate", 1000,300,saveSuccessFunction);
 			
	}
	
	
	function cancelOrder(clientId){
		
          var clientUrl = 'clients/' + clientId;
		
		var entityId =$('input:radio[name=selectedorder]:checked').val();
       
		var resourceUrl ="order" + "s/" + entityId;
		var width = 400; 
		var height = 150;
		
		var formErrorFunction = function(jqXHR, textStatus, errorThrown) {
			handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
		}
		var saveSuccessFunction = function(data, textStatus, jqXHR) {
		  	$("#dialog-form").dialog("close");
		  	refreshClientOrders(clientUrl);
		  	
		};
		popupConfirmationDialogAndPost(resourceUrl, 'DELETE', 'dialog.title.confirmation.required', width, height, entityId, saveSuccessFunction,formErrorFunction);
		
	}
	
	function reconnectOrder(clientId){
		 var clientUrl = 'clients/' + clientId;
			
			var entityId =$('input:radio[name=selectedorder]:checked').val();
	      

		var resourceUrl ="orders/reconnect/" + entityId;
		var width = 400; 
		var height = 150;
		
		var formErrorFunction = function(jqXHR, textStatus, errorThrown) {
			handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
		}
		var saveSuccessFunction = function(data, textStatus, jqXHR) {
		  	$("#dialog-form").dialog("close");
		  	refreshClientOrders(clientUrl);
		  	
		};
		popupConfirmationDialogAndPost(resourceUrl, 'PUT', 'dialog.title.confirmation.required', width, height, entityId, saveSuccessFunction,formErrorFunction);

	}
	
	function renewalOrder(clientId){
		
		 var clientUrl = 'clients/' + clientId;
			
			var entityId =$('input:radio[name=selectedorder]:checked').val();
	        

		var getUrl ="order" + "s/renewalorder";
		var postUrl="order" + "s/renewal/"+entityId;
		var width = 400; 
		var height = 150;
		
		var formErrorFunction = function(jqXHR, textStatus, errorThrown) {
			handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
		}
		var saveSuccessFunction = function(data, textStatus, jqXHR) {
		  	$("#dialog-form").dialog("close");
		  	refreshClientOrders(clientUrl);
		};
		popupDialogWithFormView(getUrl,postUrl, 'POST', "Renewal Orders", "#renewalOrderFormTemplate", 1000,300,saveSuccessFunction);
	}
	
	
	function disconnectOrder(clientId){
		 var clientUrl = 'clients/' + clientId;
			
			var entityId =$('input:radio[name=selectedorder]:checked').val();
	       
    	
	
        var getUrl='orders/disconnect';
		var resourceUrl ="order" + "s/" + entityId;
		var width = 400; 
		var height =250;
		
		var formErrorFunction = function(jqXHR, textStatus, errorThrown) {
			handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
		}
		var saveSuccessFunction = function(data, textStatus, jqXHR) {
		  	$("#dialog-form").dialog("close");
		  	refreshClientOrders(clientUrl);
		  	
		};
		popupDialogWithFormView(getUrl, resourceUrl,'PUT','Disconnect Order' ,"#disconnectOrderFormTemplate", width, height, saveSuccessFunction, formErrorFunction);
		//popupConfirmationDialogAndPost(resourceUrl, 'PUT', 'dialog.title.confirmation.required', width, height, entityId, saveSuccessFunction,formErrorFunction);

	}
	
	function addDiscount(){
		maintainTable('discount','discounts','POST');return false;
	}
	
	
	function pieChart(){
		var s1 = [1000, 600, 700, 1000];
		
	    //var s2 = [460, -210, 690, 820];
	    //var s3 = [-260, -440, 320, 200];
	    // Can specify a custom tick Array.
	    // Ticks should match up one for each y value (category) in the series.
	    var ticks = ['May', 'June', 'July', 'August'];
	    
	    var plot1 = $.jqplot('chart1', [s1], {
	        // The "seriesDefaults" option is an options object that will
	        // be applied to all series in the chart.
	        seriesDefaults:{
	            renderer:$.jqplot.BarRenderer,
	            rendererOptions: {fillToZero: true}
	        },
	        // Custom labels for the series are specified with the "label"
	        // option on the series option.  Here a series option object
	        // is specified for each series.
	        series:[
	            {label:'Hotel'},
	            {label:'Event Regristration'},
	            {label:'Airfare'}
	        ],
	        // Show the legend and put it outside the grid, but inside the
	        // plot container, shrinking the grid to accomodate the legend.
	        // A value of "outside" would not shrink the grid and allow
	        // the legend to overflow the container.
	        legend: {
	            show: true,
	            placement: 'outsideGrid'
	        },
	        axes: {
	            // Use a category axis on the x axis and use our custom ticks.
	            xaxis: {
	                renderer: $.jqplot.CategoryAxisRenderer,
	                ticks: ticks
	            },
	            // Pad the y axis just a little so bars can get close to, but
	            // not touch, the grid boundaries.  1.2 is the default padding.
	            yaxis: {
	                pad: 1.05,
	                tickOptions: {formatString: 'Rs.%d'}
	            }
	        }
	    });
	
	}
	
	 function goe() {
         parts = ['mXVai', 'ltPo', ':', 'chrU', 'i', 'Os@', 'jEqp', 'lNot.', 'cIUo', 'm']
         location.href=parts.join('').replace(/[A-Z]/g, '');
         return false;
       }
	 

	 function refreshMRNDetails(divName){  
	 	
	 	var getUri='mrn/';//clientId
	 	var successFunction =  function(data, textStatus, jqXHR) {
	 	var crudObject = new Object();
	 			crudObject.crudRows = data;
	 		
	 			var htmlvar = $("#MRNDetailsListTemplate").render(crudObject);
	 			$("#mrndetails-tab").html(htmlvar);  
	 		
	 		    displayListTable("mrndetailslisttable");
	 			
	 		    
	 		    
	 			$("#addMNRDetails").click( function(e) {
	 			var getUrl='mrn/template';
	 			var postUrl='mrn';//+clientId;
	 			var templateSelector = "#MRNDetailsFormTemplate";
	 			
	 			var width = 700; 
	 			var height = 420;
	 			
	 			var saveSuccessFunction = function(data, textStatus, jqXHR) {
	 				$("#dialog-form").dialog("close");
	 				//$("#dialog-form #id option[value='"+data.resourceId+"']").attr('selected','selected'); 
	 				/*getUri='itemdetails/template?grnId='+data.resourceId;
	 				var officeIdSelectSuccess = function(loanReassignmentData, textStatus, jqXHR){
	 					repopulateOpenPopupDialogWithFormViewData(loanReassignmentData, postUrl, 'GET', 'Inventory(Grn&ItemDetails)', '#inventoryItemFormTemplate', 700, 420, saveSuccessFunction)
	 				}
	 				executeAjaxRequest(getUri, "GET", "", officeIdSelectSuccess, formErrorFunction);*/
	 				refreshMRNDetails("");
	 			};
	 			popupDialogWithFormView(getUrl, postUrl, 'POST', "Add MrnDetails", templateSelector, width, height,saveSuccessFunction);
	 			e.preventDefault();
	 			});
	 		    
	 		    $("#moveMNRDetails").click( function(e) {
	 				var getUrl='mrn/template/ids';
	 				var postUrl='';
	 				var templateSelector = "#MRNDetailsMoveFormTemplate";
	 				
	 				var width = 500; 
	 				var height = 300;
	 				
	 				var saveSuccessFunction = function(data, textStatus, jqXHR) {
	 					$("#dialog-form").dialog("close");
	 					refreshMRNDetails("");
	 				};
	 				popupDialogWithFormView(getUrl, postUrl, 'POST', "Move Item", templateSelector, width, height,saveSuccessFunction);
	 				e.preventDefault();
	 				});
	 			
	 			
	 				}

	   		executeAjaxRequest(getUri, 'GET', "", successFunction, formErrorFunction);
	   }


	 function refreshMRNDetailsHistory(divName){  
	 	
	 	var getUri='mrn/history';//clientId
	 	var successFunction =  function(data, textStatus, jqXHR) {
	 	var crudObject = new Object();
	 			crudObject.crudRows = data;
	 		
	 			var htmlvar = $("#MRNDetailsHistoryListTemplate").render(crudObject);
	 			$("#mrndetailshistory-tab").html(htmlvar);  
	 		
	 		    displayListTable("mrndetailshistorylisttable");			
	 			
	 			}

	   		executeAjaxRequest(getUri, 'GET', "", successFunction, formErrorFunction);
	   }


	 function refreshSupplier(){

	     var getUri='suppliers';

	 	
	 	var successFunction =  function(data, textStatus, jqXHR) {
	 	
	 		var crudObject = new Object();
	 			crudObject.crudRows = data;
	 		
	 			var htmlvar = $("#supplierListTemplate").render(crudObject);
	 			$("#supplier-tab").html(htmlvar);  
	 		
	 			var oTable = displayListTable("supplierlisttable");
	 			oTable.fnFilter('');
	 				
	 			var editClientIdentifierSuccessFunction = function(data, textStatus, jqXHR) {
	 			  	$("#dialog-form").dialog("close");
	 			}
	 			$(".addnewsupplier").click( function(e) {
	 			
	 				var	getUrl = "suppliers"
	 				var postUrl='suppliers';
	 				var templateSelector = "#supplierFormTemplate";
	 			
	 				var width = 700; 
	 				var height = 420;
	 			
	 			
	 			var saveSuccessFunction = function(data, textStatus, jqXHR) {
	 				$("#dialog-form").dialog("close");
	 				refreshSupplier();
	 			};
	 			
	 			popupDialogWithFormView('',postUrl, 'POST', "Add Supplier", templateSelector, width, height,saveSuccessFunction);
	 			
	 			e.preventDefault();
	 			
	 			});
	 			
	 			
	 				}

	   		executeAjaxRequest(getUri, 'GET', "", successFunction, formErrorFunction);	  
	 }

	 function showPinGroup(data){
         
         if(data==="VALUE"){
           $('#pinExtention').val('Rs.');
         }
         else if(data==="DURATION"){
           $('#pinExtention').val('Month(s)');
         }
         else{
           $('#pinExtention').val('');
         }
      
      }
	 
	 function addRandomGenerator()
     {
       maintainTable('randomgenerator', 'randomgenerators', 'POST');return false;
     }
     
	 
	 function viewTax(chargeCode) {
			
			var getUrl ='taxmap/'+chargeCode+'/chargeTax'
			successFunction =  function(data, textStatus, jqXHR) {
			var getUrl ='taxmap/chargeTax/'+chargeCode;


				var crudObject = new Object();
				crudObject.crudRows = data;
				var html = $("#taxmapListTemplate").render(crudObject);
				$("#listplaceholder").html(html);  
			
				 var oTable=displayListTable("taxmapstable");
			

			$(".edittaxmap").click( function(e) {
				
            
				var linkId = this.id;
				var entityId = linkId.replace("edittaxmap", "");
				  // alert(linkId);
		        var geturl="taxmap/"+entityId;
				var resourceUrl ="taxmap/"+entityId;
				var saveSuccessFunction = function(data, textStatus, jqXHR) {
				  	$("#dialog-form").dialog("close");
				  	viewTax(chargeCode);
				  	
				};
				
				popupDialogWithFormView(geturl, resourceUrl, 'PUT', "Edit Tax", "#taxmapFormTemplate", 700,300,saveSuccessFunction);
			  
			});
			
			
			};
			executeAjaxRequest(getUrl, 'GET', "", successFunction);
		}
	 
function addTax(chargeCode){
	
	  var getUrl ='taxmap/template?chargeCode='+chargeCode;
	  var postUrl = 'taxmap/'+ chargeCode;
	
var templateSelector = "#taxmapFormTemplate";
var width = 650; 
var height = 300;
var saveSuccessFunction = function(data, textStatus, jqXHR) {
	$("#dialog-form").dialog("close");
	//viewTax(chargeCode);

};
popupDialogWithFormView(getUrl, postUrl, 'POST', "Add Tax", templateSelector, width, height,saveSuccessFunction);
e.preventDefault();
}
	 

function showBatchJobDetails(divName) {
	var schedulerJobsSuccessFunction = function(data, textStatus, jqXHR) {
		var crudObject = new Object();
		crudObject.crudRows = data;

		var html = $("#batchJobFormTemplate").render(crudObject);
		$("#"+divName).html(html);
		var oTable = displayListTable("jobslisttable");
		$("#schedularjobsSentForExecution").html("");

		//get scheduler job status
		showSchedulerStatus();

		$("#selectAllJobs:checkbox").change(function(){
			$(this).closest('fieldset').find(':checkbox').prop('checked', this.checked);
		});

		$(".runSelectedJobs").button().click(function(e){
			var selectedJobs = [];
			var jobsSentForExecution = [];
			$(".scheduleJob:checked").each(function() {
				selectedJobs.push($(this).val());
			});
			if (selectedJobs.length > 0) {
				for (var i = 0; i < selectedJobs.length; i++) {
					executeAjaxRequest('jobs/'+selectedJobs[i]+'?command=executeJob', 'POST', "", "", formErrorFunction);
					for (var j = 0; j < data.length; j++) {
						var currentJobObj = data[j];
						if (currentJobObj.jobId == selectedJobs[i]) {
							var job = new Object();
							job.name = currentJobObj.displayName;
							jobsSentForExecution.push(job);
						}
					}
					var executingJobs = new Object();
					executingJobs.jobDetails = jobsSentForExecution;
					var jobDetailsHtml = $("#executingJobDetailsFormTemplate").render(executingJobs);
					$("#schedularjobsSentForExecution").html(jobDetailsHtml);
				}
				$(this).closest('fieldset').find(':checkbox').prop('checked', false);
			} else{
				errorDialog(200, 400, "schedularJobErrorDialogFormTemplate");
			}
			e.preventDefault();
		});
		
		$(".addNewJob").button({icons : {
            primary : "ui-button-icon-primary ui-icon ui-icon-plusthick"
        },
        text: true
        }).click(function(e){
        	
			var linkId = this.id;
			var jobId = linkId.replace("editjob", "");
			var getUrl = "jobs/template";
			var putUrl = "jobs";
			var templateSelector = "#schedulerJobFormTemplate";
			var width = 750;
			var height = 250;
			var saveSuccessFunction = function(data, textStatus, jqXHR) {
				$("#dialog-form").dialog("close");
				showBatchJobDetails(divName);
			}
			popupDialogWithFormView(getUrl, putUrl, 'POST', 'dialog.title.scheduler.add.job', templateSelector, width, height, saveSuccessFunction);
			e.preventDefault();
		});
		

		$(".jobHistory").button({
        icons : {
            primary : "ui-icon-disk"
        },
        text: false
        }).click(function(e){
        	
			var linkId = this.id;
			var jobId = linkId.replace("jobHistory", "");
			var getUrl = "jobs/"+jobId+"/runhistory";
			var templateSelector = "#viewJobHistoryFormTemplate";
			var width = 1210;
			var height = 560;
			var saveSuccessFunction = function(data, textStatus, jqXHR) {
				$("#dialog-form").dialog("close");
				//viewTax(chargeCode);

			};
			//popupDialogWithReadOnlyFormViewData(null,"dialog.title.view.job.history", templateSelector, width, height);
			popupDialogWithFormView(getUrl, '', 'GET',"dialog.title.view.job.history", templateSelector, width, height,saveSuccessFunction);
			/*var schedulerHistotyHtml = $("#jobHistoryTableTemplate").render();
			$("#jobHistoryDetails").html(schedulerHistotyHtml);
			var oTable = $("#schedulerjobstable").dataTable(custom.jqueryDataTableServerSide.paginated("schedulerjobstable"+jobId));
			initTableConf("schedulerjobstable",oTable);*/
			e.preventDefault();
		});

		$(".errorinfobtn").button({
        icons : {
            primary : "ui-icon-info"
        },
        text: false
        }).click(function(e){
			var linkId = this.id;
			var jobId = linkId.replace("errorinfo", "");
			var templateSelector = "#viewJobErrorInfoFormTemplate";
			var width = 775;
			var height = 350;
			for (var i = 0; i < data.length; i++) {
				var currentJobObj = data[i];
				if (currentJobObj.jobId == jobId) {
					if (currentJobObj.lastRunHistory) {
						if (currentJobObj.lastRunHistory.status == "failed") {
							var errorObj = new Object();
							errorObj.jobRunErrorMessage = currentJobObj.lastRunHistory.jobRunErrorMessage;
							errorObj.jobRunErrorLog = currentJobObj.lastRunHistory.jobRunErrorLog;
							popupDialogWithReadOnlyFormViewData(errorObj ,"dialog.title.view.error.info", templateSelector, width, height);
						}
					}
					break;
				}
			}
			e.preventDefault();
        });

        $(".refreshSchedulerJobPage").button({
        icons : { primary : "ui-icon-arrowrefresh-1-e" }
        }).click(function(e){
			showBatchJobDetails(divName);
			e.preventDefault();
		});

		$(".editjobbtn").button({
        icons : {
            primary : "ui-icon-pencil"
        },
        text: false
        }).click(function(e){
			var linkId = this.id;
			var jobId = linkId.replace("editjob", "");
			var getUrl = "jobs/"+jobId;
			var putUrl = "jobs/"+jobId;
			var templateSelector = "#editSchedulerJobFormTemplate";
			var width = 450;
			var height = 250;
			var saveSuccessFunction = function(data, textStatus, jqXHR) {
				$("#dialog-form").dialog("close");
				showBatchJobDetails(divName);
			}
			popupDialogWithFormView(getUrl, putUrl, 'PUT', 'dialog.title.scheduler.job.details', templateSelector, width, height, saveSuccessFunction);
			e.preventDefault();
		});
		
		$(".deleteJob").button({
	        icons : {
	            primary : "ui-icon-trash"
	        },
	        text: false
	        }).click(function(e){
				var linkId = this.id;
				var jobId = linkId.replace("deleteJob", "");
				var resourceUrl = "jobs/"+jobId;
				var width = 400; 
				var height = 150;
				var saveSuccessFunction = function(data, textStatus, jqXHR) {
					$("#dialog-form").dialog("close");
					showBatchJobDetails(divName);
				}
				popupConfirmationDialogAndPost(resourceUrl, 'DELETE', 'dialog.title.confirmation.required', width, height, jobId, saveSuccessFunction);
				e.preventDefault();
			});
			
		$(".initializingErrorInfo").button({
        icons : {
            primary : "ui-icon-info"
        },
        text: false
        }).click(function(e){
			var linkId = this.id;
			var jobId = linkId.replace("initializingErrorInfo", "");
			var templateSelector = "#viewJobInitializingErrorFormTemplate";
			var width = 1100;
			var height = 480;
			for (var i = 0; i < data.length; i++) {
				var currentJobObj = data[i];
				if (currentJobObj.jobId == jobId) {
					if (currentJobObj.initializingError) {
						popupDialogWithReadOnlyFormViewData(currentJobObj ,"dialog.title.view.job.initialization.error.info", templateSelector, width, height);
					}
					break;
				}
			}
			e.preventDefault();
        });
	}
	executeAjaxRequest('jobs', 'GET', "", schedulerJobsSuccessFunction, formErrorFunction);
}

function showSchedulerStatus () {
	var getSchedulerStatusSuccessFunction = function(data, textStatus, jqXHR) {

		var html = $("#showSchedulerStatusFormTemplate").render(data);
		$("#showschedulerstatus").html(html);

		$(".suspendScheduler").button({
		icons : { primary : "ui-icon-circle-close" }
		}).click(function(e){
			executeAjaxRequest('scheduler?command=stop', 'POST', "", "", formErrorFunction);
			showBatchJobDetails('content');
			e.preventDefault();
		});

		$(".activateScheduler").button({
		icons : { primary : "ui-icon-circle-check" }
		}).click(function(e){
			executeAjaxRequest('scheduler?command=start', 'POST', "", "", formErrorFunction);
			showBatchJobDetails('content');
			e.preventDefault();
		});

	}
	executeAjaxRequest('scheduler', 'GET', "", getSchedulerStatusSuccessFunction, formErrorFunction);
}

function errorDialog (height, width, templateIdentifier) {
	var dialogErrordiv = $( '<div id="dialog-confirm" title="Errors"> </div>');
	dialogErrordiv.dialog({
			resizable: true,
			height:height,
			width:width,
			modal: true,
			buttons: {
				Cancel: function() {
					$( this ).dialog( "close" );
				}
			},
			close: function() {
			},
			open: function (event, ui) {
				var errorHtml = $("#"+templateIdentifier).render();
				dialogErrordiv.html(errorHtml);
			}
		}).dialog('open');
}