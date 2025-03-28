/* https://github.com/jonathantneal/media-player */
var MediaPlayer = function() {
    function e(e, t, n, l) {
        var a, r, i, o = void 0 !== e.onpointerup,
            u = void 0 !== e.ontouchstart,
            c = o ? "pointerdown" : u ? "touchstart" : "mousedown",
            m = o ? "pointermove" : u ? "touchmove" : "mousemove",
            s = o ? "pointerup" : u ? "touchend" : "mouseup",
            d = /^(ltr|rtl)$/i.test(n),
            v = /^(ltr|ttb)$/i.test(n),
            f = d ? "clientX" : "clientY";

        function p(e) {
            e.preventDefault();
            var t = f in e ? e[f] : e.touches && e.touches[0] && e.touches[0][f] || 0;
            l((v ? t - r : i - t) / (i - r))
        }

        function h() {
            a.removeEventListener(m, p), a.removeEventListener(s, h)
        }
        e.addEventListener(c, function(n) {
            a = e.ownerDocument.defaultView;
            var l = t.getBoundingClientRect();
            r = d ? l.left : l.top, i = d ? l.right : l.bottom, p(n), a.addEventListener(m, p), a.addEventListener(s, h)
        })
    }

    function t(e) {
        return ("0" + Math.floor(e / 60)).slice(-2) + ":" + ("0" + Math.floor(e % 60)).slice(-2)
    }

    function n(e, t, n) {
        return Math.floor(e / 60) + " " + t + ", " + Math.floor(e % 60) + " " + n
    }

    function l(e) {
        var t = e instanceof Node ? e : document.createElement(e),
            n = [].slice.call(arguments, 1);
        for (var l in n)
            if (n[l] instanceof Node) t.appendChild(n[l]);
            else if (Object(n[l]) === n[l])
            for (var a in n[l]) "function" == typeof n[l][a] ? t.addEventListener(a, n[l][a]) : t.setAttribute(a, n[l][a]);
        return t
    }

    function a(e, t, n) {
        var a = "http://www.w3.org/2000/svg",
            r = document.createElementNS(a, "use");
        return r.setAttributeNS("http://www.w3.org/1999/xlink", "href", t[n] || "#symbol-" + n), l(document.createElementNS(a, "svg"), {
            class: e + "-symbol " + e + "-" + n + "-symbol",
            role: "presentation"
        }, r)
    }

    function r(e, t) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, void 0), e.dispatchEvent(n)
    }
    return function(i, o) {
        var u = this,
            c = Object(o),
            m = c.prefix || "media",
            s = Object(c.lang),
            d = Object(c.svgs),
            v = c.timeDir || "ltr",
            f = c.volumeDir || "ltr",
            p = i.ownerDocument;
        u.media = l(i, {
            canplaythrough: C,
            loadstart: M,
            loadeddata: function() {
                E()
            },
            pause: k,
            play: k,
            timeupdate: E,
            volumechange: D
        }), u.playSymbol = a(m, d, "play"), u.pauseSymbol = a(m, d, "pause"), u.play = l("button", {
            class: m + "-control " + m + "-play",
            click: L,
            keydown: $
        }, u.playSymbol, u.pauseSymbol), u.timeMeter = l("span", {
            class: m + "-meter " + m + "-time-meter"
        }), u.timeRange = l("span", {
            class: m + "-range " + m + "-time-range"
        }, u.timeMeter), u.time = l("button", {
            class: m + "-slider " + m + "-time",
            role: "slider",
            "aria-label": s.currentTime || "current time",
            "data-dir": v,
            click: function(e) {
                e.pointerType || e.detail || L(e)
            },
            keydown: $
        }, u.timeRange), u.currentTimeText = p.createTextNode(""), u.currentTime = l("span", {
            class: m + "-text " + m + "-current-time",
            role: "timer",
            "aria-label": s.currentTime || "current time"
        }, u.currentTimeText), u.remainingTimeText = p.createTextNode(""), u.remainingTime = l("span", {
            class: m + "-text " + m + "-remaining-time",
            role: "timer",
            "aria-label": s.remainingTime || "remaining time"
        }, u.remainingTimeText), u.muteSymbol = a(m, d, "mute"), u.unmuteSymbol = a(m, d, "unmute"), u.mute = l("button", {
            class: m + "-control " + m + "-mute",
            click: N,
            keydown: q
        }, u.muteSymbol, u.unmuteSymbol), u.volumeMeter = l("span", {
            class: m + "-meter " + m + "-volume-meter"
        }), u.volumeRange = l("span", {
            class: m + "-range " + m + "-volume-range"
        }, u.volumeMeter), u.volume = l("button", {
            class: m + "-slider " + m + "-volume",
            role: "slider",
            "aria-label": s.volume || "volume",
            "data-dir": f,
            click: function(e) {
                e.pointerType || e.detail || N(e)
            },
            keydown: q
        }, u.volumeRange), u.downloadSymbol = a(m, d, "download"), u.download = l("button", {
            class: m + "-control " + m + "-download",
            "aria-label": s.download || "download",
            click: function() {
                var e = p.head.appendChild(l("a", {
                    download: '',
                    href: i.src + '.zip'
                }));
                e.click(), p.head.removeChild(e)
            }
        }, u.downloadSymbol), u.enterFullscreenSymbol = a(m, d, "enterFullscreen"), u.leaveFullscreenSymbol = a(m, d, "leaveFullscreen"), u.fullscreen = l("button", {
            class: m + "-control " + m + "-fullscreen",
            click: function() {
                F ? w === S() ? x().call(p) : (F.call(w), u.fullscreen.focus(), setTimeout(function() {
                    u.fullscreen.focus()
                }, 200)) : i.webkitSupportsFullscreen && (i.webkitDisplayingFullscreen ? i.webkitExitFullscreen() : i.webkitEnterFullscreen(), R())
            }
        }, u.enterFullscreenSymbol, u.leaveFullscreenSymbol), u.toolbar = l("div", {
            class: m + "-toolbar",
            role: "toolbar",
            "aria-label": s.player || "media player"
        }, u.play, u.mute, u.volume, u.currentTime, u.time, u.remainingTime, u.download, u.fullscreen);
        var h, y, b, g, w = u.player = l("div", {
                class: m + "-player",
                role: "region",
                "aria-label": s.player || "media player"
            }, u.toolbar),
            T = u._fullscreenchange = "onfullscreenchange" in w ? "fullscreenchange" : "onwebkitfullscreenchange" in w ? "webkitfullscreenchange" : "onmozfullscreenchange" in w ? "mozfullscreenchange" : "onMSFullscreenChange" in w ? "MSFullscreenChange" : "fullscreenchange",
            S = u._fullscreenElement = function() {
                return p.fullscreenElement || p.webkitFullscreenElement || p.mozFullScreenElement || p.msFullscreenElement
            },
            F = u._requestFullscreen = w.requestFullscreen || w.webkitRequestFullscreen || w.mozRequestFullScreen || w.msRequestFullscreen,
            x = u._exitFullscreen = function() {
                return p.exitFullscreen || p.webkitCancelFullScreen || p.mozCancelFullScreen || p.msExitFullscreen
            };

        function k() {
            h !== i.paused && (h = i.paused, l(u.play, {
                "aria-label": h ? s.play || "play" : s.pause || "pause"
            }), l(u.playSymbol, {
                "aria-hidden": !h
            }), l(u.pauseSymbol, {
                "aria-hidden": h
            }), clearInterval(g), h || (g = setInterval(E, 34)), r(i, "playchange"))
        }

        function E() {
            if (y !== i.currentTime || b !== i.duration) {
                y = i.currentTime, b = i.duration || 0;
                var e = y / b,
                    a = t(y),
                    o = t(b - Math.floor(y));
                a !== u.currentTimeText.nodeValue && (u.currentTimeText.nodeValue = a, l(u.currentTime, {
                    title: "" + n(y, s.minutes || "minutes", s.seconds || "seconds")
                })), o !== u.remainingTimeText.nodeValue && (u.remainingTimeText.nodeValue = o, l(u.remainingTime, {
                    title: "" + n(b - y, s.minutes || "minutes", s.seconds || "seconds")
                })), l(u.time, {
                    "aria-valuenow": y,
                    "aria-valuemin": 0,
                    "aria-valuemax": b
                });
                var c = /^(ltr|rtl)$/i.test(v) ? "width" : "height";
                u.timeMeter.style[c] = 100 * e + "%", r(i, "timechange")
            }
        }

        function M() {
            i.removeEventListener("canplaythrough", C), l(i, {
                canplaythrough: C
            }), l(u.download, {
                href: i.src + '.zip',
                download:''
            }), k(), D(), R(), E()
        }

        function C() {
            i.removeEventListener("canplaythrough", C), r(i, "canplaystart"), h && !i.autoplay || i.play()
        }

        function D() {
            var e = i.muted ? 0 : i.volume,
                t = !e;
            l(u.volume, {
                "aria-valuenow": e,
                "aria-valuemin": 0,
                "aria-valuemax": 1
            });
            var n = /^(ltr|rtl)$/i.test(f) ? "width" : "height";
            u.volumeMeter.style[n] = 100 * e + "%", l(u.mute, {
                "aria-label": t ? s.unmute || "unmute" : s.mute || "mute"
            }), l(u.muteSymbol, {
                "aria-hidden": t
            }), l(u.unmuteSymbol, {
                "aria-hidden": !t
            })
        }

        function R() {
            var e = w === S();
            l(u.fullscreen, {
                "aria-label": e ? s.leaveFullscreen || "leave full screen" : s.enterFullscreen || "enter full screen"
            }), l(u.enterFullscreenSymbol, {
                "aria-hidden": e
            }), l(u.leaveFullscreenSymbol, {
                "aria-hidden": !e
            })
        }

        function L(e) {
            e.preventDefault(), i[i.paused ? "play" : "pause"]()
        }

        function N(e) {
            e.preventDefault(), i.muted = !i.muted
        }

        function $(e) {
            var t = e.keyCode,
                n = e.shiftKey;
            if (37 <= t && 40 >= t) {
                e.preventDefault();
                var l = /^(btt|ltr)$/.test(v),
                    a = 37 === t || 39 === t ? t - 38 : t - 39;
                i.currentTime = Math.max(0, Math.min(b, y + a * (l ? 1 : -1) * (n ? 10 : 1))), E()
            }
        }

        function q(e) {
            var t = e.keyCode,
                n = e.shiftKey;
            if (37 <= t && 40 >= t) {
                e.preventDefault();
                var l = /^(btt|ltr)$/.test(f),
                    a = 37 === t || 39 === t ? t - 38 : l ? 39 - t : t - 39;
                i.volume = Math.max(0, Math.min(1, i.volume + a * (l ? .1 : -.1) * (n ? 1 : .2)))
            }
        }
        p.addEventListener(T, R), l(i, {
            class: m + "-media",
            playsinline: "",
            "webkit-playsinline": "",
            role: "img",
            tabindex: -1
        }).controls = !1, i.parentNode && w.insertBefore(i.parentNode.replaceChild(w, i), u.toolbar), e(u.time, u.timeRange, v, function(e) {
            i.currentTime = b * Math.max(0, Math.min(1, e)), E()
        }), e(u.volume, u.volumeRange, f, function(e) {
            i.volume = Math.max(0, Math.min(1, e))
        }), M()
    }
}();