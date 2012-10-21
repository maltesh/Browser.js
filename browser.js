/*
 * License :GPL
 * @author:zizou5mal@gmail.com
 */
var System = {

    browser:{
        agent:navigator.userAgent,
        name:function (){
            var ua = this.agent.toLowerCase();
            if((/android/).test(ua)){
                return 'Android'
            }else if((/chrome/).test(ua)){
                return 'Chrome';
            }else if((/opera/).test(ua)){
                return 'Opera'
            }else if((/safari/).test(ua)){
                return 'Safari';
            }else if((/midori/).test(ua)){
                return 'Midori';
            }else if ((/mozilla/).test(ua)){
                return 'Firefox';
            }else if ((/msie/).test(ua)){
                return 'Microsoft Internet Explorer'
            }else if ((/ipad/).test(ua)){
                return 'Ipad';
            }else if ((/iphone/).test(ua)){
                return 'Iphone';
            }else if ((/blacklackberry/).test(ua)){
                return 'Blackberry';
            }else if((/ipod/).test(ua)){
                return 'Ipod';
            }
        },
        version:navigator.appVersion,
        cookieenabled:navigator.cookieEnabled,
        pluginexists:function(){
            return  (navigator.plugins.length>0)?true:false
        },
        pluginsList:function (){
            var plist = [];
            if(this.pluginexists()){
                var np = navigator.plugins;
                for ( var plgn in np){
                    var pgn = np[plgn];
                    if (pgn.name !== undefined)
                        plist.push( pgn.name);
                }
            }
            return plist;
        },
        javaenabled:navigator.javaEnabled
    },
    OS:{
        osname:function (){
            var ua = System.browser.agent.toLowerCase();
            if ( /android/i.test( ua ) ) {
                return 'Android';
            } else if ( /cros/i.test( ua ) ) {
                return 'Chrome OS';
            } else if ( /ip[ao]d|iphone/i.test( ua ) ) {
                return 'iOS';
            } else if ( /linux/i.test( ua ) ) {
                return 'Linux';
            } else if ( /mac OS/i.test( ua ) ) {
                return 'Mac OS';
            } else if ( /windows/i.test( ua ) ) {
                return 'Windows';
            }
            return false;
        }
    },
    support:{
        file:window.file || window.FileReader||window.Blob,
        worker:!!window.Worker,
        filesystem: !! window.requestFileSystem || !! window.webkitRequestFileSystem,
        getusermedia: !! window.navigator.getUserMedia || !! window.navigator.webkitGetUserMedia || !! window.navigator.mozGetUserMedia || !! window.navigator.msGetUserMedia,
        webglsupport: ( function () { try { return !! window.WebGLRenderingContext && !! document.createElement( 'canvas' ).getContext( 'experimental-webgl' ); } catch( e ) { return false; } } )(),
    },
    screen:{
        height:window.screen.height,
        width:window.screen.width,
        screenresolution:this.screen.height*this.screen.width,
        colordepth:window.screen.colorDepth
    }

}





