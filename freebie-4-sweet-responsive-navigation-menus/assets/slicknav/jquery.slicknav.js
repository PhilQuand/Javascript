/*!
 * SlickNav Responsive Mobile Menu v1.0.3
 * (c) 2015 Josh Cope
 * licensed under MIT
 */
!(function (e, n, t) {
    function a(n, t) {
        (this.element = n), (this.settings = e.extend({}, i, t)), (this._defaults = i), (this._name = s), this.init();
    }
    var i = {
            label: "MENU",
            duplicate: !0,
            duration: 200,
            easingOpen: "swing",
            easingClose: "swing",
            closedSymbol: "&#9658;",
            openedSymbol: "&#9660;",
            prependTo: "body",
            parentTag: "a",
            closeOnClick: !1,
            allowParentLinks: !1,
            nestedParentLinks: !0,
            showChildren: !1,
            removeIds: !1,
            removeClasses: !1,
            brand: "",
            init: function () {},
            beforeOpen: function () {},
            beforeClose: function () {},
            afterOpen: function () {},
            afterClose: function () {},
        },
        s = "slicknav",
        l = "slicknav";
    (a.prototype.init = function () {
        var t,
            a,
            i = this,
            s = e(this.element),
            o = this.settings;
        if (
            (o.duplicate
                ? ((i.mobileNav = s.clone()),
                  i.mobileNav.removeAttr("id"),
                  i.mobileNav.find("*").each(function (n, t) {
                      e(t).removeAttr("id");
                  }))
                : ((i.mobileNav = s),
                  i.mobileNav.removeAttr("id"),
                  i.mobileNav.find("*").each(function (n, t) {
                      e(t).removeAttr("id");
                  })),
            o.removeClasses &&
                (i.mobileNav.removeAttr("class"),
                i.mobileNav.find("*").each(function (n, t) {
                    e(t).removeAttr("class");
                })),
            (t = l + "_icon"),
            "" === o.label && (t += " " + l + "_no-text"),
            "a" == o.parentTag && (o.parentTag = 'a href="#"'),
            i.mobileNav.attr("class", l + "_nav"),
            (a = e('<div class="' + l + '_menu"></div>')),
            "" !== o.brand)
        ) {
            var r = e('<div class="' + l + '_brand">' + o.brand + "</div>");
            e(a).append(r);
        }
        (i.btn = e(
            [
                "<" + o.parentTag + ' aria-haspopup="true" tabindex="0" class="' + l + "_btn " + l + '_collapsed">',
                '<span class="' + l + '_menutxt">' + o.label + "</span>",
                '<span class="' + t + '">',
                '<span class="' + l + '_icon-bar"></span>',
                '<span class="' + l + '_icon-bar"></span>',
                '<span class="' + l + '_icon-bar"></span>',
                "</span>",
                "</" + o.parentTag + ">",
            ].join("")
        )),
            e(a).append(i.btn),
            e(o.prependTo).prepend(a),
            a.append(i.mobileNav);
        var d = i.mobileNav.find("li");
        e(d).each(function () {
            var n = e(this),
                t = {};
            if (((t.children = n.children("ul").attr("role", "menu")), n.data("menu", t), t.children.length > 0)) {
                var a = n.contents(),
                    s = !1;
                (nodes = []),
                    e(a).each(function () {
                        return e(this).is("ul") ? !1 : (nodes.push(this), void (e(this).is("a") && (s = !0)));
                    });
                var r = e("<" + o.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + l + '_item"/>');
                if (o.allowParentLinks && !o.nestedParentLinks && s)
                    e(nodes)
                        .wrapAll('<span class="' + l + "_parent-link " + l + '_row"/>')
                        .parent();
                else {
                    var d = e(nodes).wrapAll(r).parent();
                    d.addClass(l + "_row");
                }
                n.addClass(l + "_collapsed"), n.addClass(l + "_parent");
                var c = e('<span class="' + l + '_arrow">' + o.closedSymbol + "</span>");
                o.allowParentLinks && !o.nestedParentLinks && s && (c = c.wrap(r).parent()), e(nodes).last().after(c);
            } else 0 === n.children().length && n.addClass(l + "_txtnode");
            n
                .children("a")
                .attr("role", "menuitem")
                .click(function (n) {
                    o.closeOnClick &&
                        !e(n.target)
                            .parent()
                            .closest("li")
                            .hasClass(l + "_parent") &&
                        e(i.btn).click();
                }),
                o.closeOnClick &&
                    o.allowParentLinks &&
                    (n
                        .children("a")
                        .children("a")
                        .click(function (n) {
                            e(i.btn).click();
                        }),
                    n.find("." + l + "_parent-link a:not(." + l + "_item)").click(function (n) {
                        e(i.btn).click();
                    }));
        }),
            e(d).each(function () {
                var n = e(this).data("menu");
                o.showChildren || i._visibilityToggle(n.children, null, !1, null, !0);
            }),
            i._visibilityToggle(i.mobileNav, null, !1, "init", !0),
            i.mobileNav.attr("role", "menu"),
            e(n).mousedown(function () {
                i._outlines(!1);
            }),
            e(n).keyup(function () {
                i._outlines(!0);
            }),
            e(i.btn).click(function (e) {
                e.preventDefault(), i._menuToggle();
            }),
            i.mobileNav.on("click", "." + l + "_item", function (n) {
                n.preventDefault(), i._itemClick(e(this));
            }),
            e(i.btn).keydown(function (e) {
                var n = e || event;
                13 == n.keyCode && (e.preventDefault(), i._menuToggle());
            }),
            i.mobileNav.on("keydown", "." + l + "_item", function (n) {
                var t = n || event;
                13 == t.keyCode && (n.preventDefault(), i._itemClick(e(n.target)));
            }),
            o.allowParentLinks &&
                o.nestedParentLinks &&
                e("." + l + "_item a").click(function (e) {
                    e.stopImmediatePropagation();
                });
    }),
        (a.prototype._menuToggle = function (e) {
            var n = this,
                t = n.btn,
                a = n.mobileNav;
            t.hasClass(l + "_collapsed") ? (t.removeClass(l + "_collapsed"), t.addClass(l + "_open")) : (t.removeClass(l + "_open"), t.addClass(l + "_collapsed")), t.addClass(l + "_animating"), n._visibilityToggle(a, t.parent(), !0, t);
        }),
        (a.prototype._itemClick = function (e) {
            var n = this,
                t = n.settings,
                a = e.data("menu");
            a ||
                ((a = {}),
                (a.arrow = e.children("." + l + "_arrow")),
                (a.ul = e.next("ul")),
                (a.parent = e.parent()),
                a.parent.hasClass(l + "_parent-link") && ((a.parent = e.parent().parent()), (a.ul = e.parent().next("ul"))),
                e.data("menu", a)),
                a.parent.hasClass(l + "_collapsed")
                    ? (a.arrow.html(t.openedSymbol), a.parent.removeClass(l + "_collapsed"), a.parent.addClass(l + "_open"), a.parent.addClass(l + "_animating"), n._visibilityToggle(a.ul, a.parent, !0, e))
                    : (a.arrow.html(t.closedSymbol), a.parent.addClass(l + "_collapsed"), a.parent.removeClass(l + "_open"), a.parent.addClass(l + "_animating"), n._visibilityToggle(a.ul, a.parent, !0, e));
        }),
        (a.prototype._visibilityToggle = function (n, t, a, i, s) {
            var o = this,
                r = o.settings,
                d = o._getActionItems(n),
                c = 0;
            a && (c = r.duration),
                n.hasClass(l + "_hidden")
                    ? (n.removeClass(l + "_hidden"),
                      s || r.beforeOpen(i),
                      n.slideDown(c, r.easingOpen, function () {
                          e(i).removeClass(l + "_animating"), e(t).removeClass(l + "_animating"), s || r.afterOpen(i);
                      }),
                      n.attr("aria-hidden", "false"),
                      d.attr("tabindex", "0"),
                      o._setVisAttr(n, !1))
                    : (n.addClass(l + "_hidden"),
                      s ? "init" == i && r.init() : r.beforeClose(i),
                      n.slideUp(c, this.settings.easingClose, function () {
                          n.attr("aria-hidden", "true"), d.attr("tabindex", "-1"), o._setVisAttr(n, !0), n.hide(), e(i).removeClass(l + "_animating"), e(t).removeClass(l + "_animating"), s ? "init" == i && r.init() : r.afterClose(i);
                      }));
        }),
        (a.prototype._setVisAttr = function (n, t) {
            var a = this,
                i = n
                    .children("li")
                    .children("ul")
                    .not("." + l + "_hidden");
            i.each(
                t
                    ? function () {
                          var n = e(this);
                          n.attr("aria-hidden", "true");
                          var i = a._getActionItems(n);
                          i.attr("tabindex", "-1"), a._setVisAttr(n, t);
                      }
                    : function () {
                          var n = e(this);
                          n.attr("aria-hidden", "false");
                          var i = a._getActionItems(n);
                          i.attr("tabindex", "0"), a._setVisAttr(n, t);
                      }
            );
        }),
        (a.prototype._getActionItems = function (e) {
            var n = e.data("menu");
            if (!n) {
                n = {};
                var t = e.children("li"),
                    a = t.find("a");
                (n.links = a.add(t.find("." + l + "_item"))), e.data("menu", n);
            }
            return n.links;
        }),
        (a.prototype._outlines = function (n) {
            n ? e("." + l + "_item, ." + l + "_btn").css("outline", "") : e("." + l + "_item, ." + l + "_btn").css("outline", "none");
        }),
        (a.prototype.toggle = function () {
            var e = this;
            e._menuToggle();
        }),
        (a.prototype.open = function () {
            var e = this;
            e.btn.hasClass(l + "_collapsed") && e._menuToggle();
        }),
        (a.prototype.close = function () {
            var e = this;
            e.btn.hasClass(l + "_open") && e._menuToggle();
        }),
        (e.fn[s] = function (n) {
            var t = arguments;
            if (void 0 === n || "object" == typeof n)
                return this.each(function () {
                    e.data(this, "plugin_" + s) || e.data(this, "plugin_" + s, new a(this, n));
                });
            if ("string" == typeof n && "_" !== n[0] && "init" !== n) {
                var i;
                return (
                    this.each(function () {
                        var l = e.data(this, "plugin_" + s);
                        l instanceof a && "function" == typeof l[n] && (i = l[n].apply(l, Array.prototype.slice.call(t, 1)));
                    }),
                    void 0 !== i ? i : this
                );
            }
        });
})(jQuery, document, window);