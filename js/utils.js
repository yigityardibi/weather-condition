//zaman dilimi kullanılarak biçimlendirilmiş bir taih ve saat bilgisini döndürecek
function convertTimeStamp(timeStapm, timezone) {
    //zaman dilimini saat cinsinden döüştürür(saniyeden saate)
    const convertTimezone = timezone / 3600;
    // yeni bir tarih nesnesini oluşturur
    const date = new Date(timeStapm * 1000);
    //tarih ve saat bilgisi için seçenkeleri belirle
    const options = {
        weekday:"long",
        day:"numeric",
        month: "long",
        year: "numeric",
        hour:"numeric",
        minute:"numeric",
        timezone:`Etc/GMT${convertTimezone >=0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
        hour12:true,
    };
    // tarihi ve saati kullanıcıya dost bir formatta döndürür
    return date.toLocaleString("en-Us", options);

}


// ülke kodunu ülke adına çevirme fonksiyonu
function convertCountryCode(country){
    let regionNames = new Intl.DisplayNames(["en"],{type: "region"});
        return regionNames.of(country);
}
/*
    *Intl.Displayname : Js'de uluslar arası dil ve bölge adlarına çevirmek için kullanılan bir API'dir.

    *Intl: Internationalization 
    *Displaynames
*/ 

export {
    convertTimeStamp,
    convertCountryCode
}