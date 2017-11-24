var GingerMan = function () {
    this.gingerElement = $("<div class='ginger_man'></div>");
    this.buttons = {
        RED: "btn_red.png",
        GREEN: "btn_green.png",
        BLUE: "btn_blue.png",
        NONE: 0
    };
    this.hats = {
        SANTA: "santa_hat.png",
        ST: "st_hat.png",
        NONE: 0
    };
    this.neck = {
        PAPILLON: "neck_papillon.png",
        SCARF: "neck_scarf.png",
        NONE: 0
    };

}

GingerMan.prototype.setChocolate = function (hasChocolate) {
    if (hasChocolate) {
        this.gingerElement.addClass("chocolate");
    } else {
        this.gingerElement.removeClass("chocolate");
    }
};

GingerMan.prototype.setCheek = function (hasChocolate) {
    if (hasChocolate) {
        this.gingerElement.addClass("chocolate");
    } else {
        this.gingerElement.removeClass("chocolate");
    }
};



GingerMan.prototype.setCandy = function (hasCandy) {
    var candyElement = $("<div class='candy'></div>");
    if (hasCandy) {
        this.gingerElement.append(candyElement);
    } else {
        this.gingerElement.children(".candy").remove();
    }
};

GingerMan.prototype.setButton = function (button) {
    var buttonsElement = $("<div class='block buttons'></div>");
    this.gingerElement.children(".buttons").remove();
    if (button == 0) {
        return;
    }
    buttonsElement.css("background-image", 'url("images/ginger/' + button + '")');
    this.gingerElement.append(buttonsElement);
};

GingerMan.prototype.setHat = function (hat) {
    var hatElement = $("<div class='block hat'></div>");
    this.gingerElement.children(".hat").remove();
    if (hat == 0) {
        return;
    }
    hatElement.css("background-image", 'url("images/ginger/' + hat + '")');
    this.gingerElement.append(hatElement);
};

GingerMan.prototype.setNeck = function (neck) {
    var neckElement = $("<div class='block neck'></div>");
    this.gingerElement.children(".neck").remove();
    if (neck == 0) {
        return;
    }
    neckElement.css("background-image", 'url("images/ginger/' + neck + '")');
    this.gingerElement.append(neckElement);
};


GingerMan.prototype.getGingerMan = function () {
    return this.gingerElement;
};