const element = document.querySelector(".input-box");
const hiddenGateElement = document.querySelector(".hidden-gate");

/***************************************/

element.addEventListener('input', handleChange);

/***************************************/

function handleChange(event) {
    const val = event.target.value;
    if (val === "素朴な琴") {
        setTimeout(() => {
            window.location.replace("../hiddenPage/index.html");
        }, 1000);
    }

    hiddenGateElement.addEventListener('click', 
        () => {
            setTimeout(() => {
                location.href = val + ".html"
            }, 1000);
        });
}

function getMacAddress() {
    var obj = new ActiveXObject("WbemScripting.SWbemLocator");
    var s = obj.ConnectServer(".");
    var properties = s.ExecQuery("SELECT * FROM Win32_NetworkAdapterConfiguration");
    var e = new Enumerator(properties);
    while (!e.atEnd()) {
        e.moveNext();
        var p = e.item();
        if (!p) continue;
        if (null != p.MACAddress) {
            return p.MACAddress;
        }
    }
    return null;
}

function getComputerName() {
    var objNetWork = new ActiveXObject("WScript.Network");
    return objNetWork.ComputerName;
}