/**
 * Turkish explanations for the guides in essay-guides-data.ts. Arrays are parallel to the English ones
 * (same paragraph order, same sentence order). English model sentences are not duplicated here.
 */
export type EssayGuideTr = {
  question: string;
  paragraphs: { purpose: string; sentences: { role: string; how: string }[] }[];
  tips: string[];
};

const TIMING_TIP_TR =
  "250–300 kelimeyi hedefle: 40 dakikada yaklaşık 5 dakika planlama, 30 dakika yazma ve 5 dakika kontrol. 250 kelimenin altı Task Response puanını düşürür.";

export const ESSAY_GUIDES_TR: Record<string, EssayGuideTr> = {
  "agree-disagree": {
    question:
      "Bazı insanlar üniversite eğitiminin herkes için ücretsiz olması gerektiğine inanır. Bu görüşe ne ölçüde katılıyor veya katılmıyorsunuz?",
    paragraphs: [
      {
        purpose:
          "Sınav görevlisine soruyu anladığını göster ve cevabını açıkça belirt; böylece tüm kompozisyonun bir yönü olsun.",
        sentences: [
          {
            role: "Genel ifade (dikkat çekici giriş)",
            how: "Konuyla ilgili geniş ve tarafsız bir cümleyle bağlamı kur. Soruyu kopyalama ve henüz kendi görüşünü söyleme.",
          },
          {
            role: "Soruyu yeniden ifade et",
            how: "Soruyu kendi sözcüklerinle, kelimeleri ve cümle yapısını değiştirerek yeniden yaz. Bu, kelime çeşitliliğini gösterir ve görevi anladığını kanıtlar.",
          },
          {
            role: "Ana tez (net tutum)",
            how: "Ne ölçüde katıldığını ya da katılmadığını açıkça yaz; istersen iki gerekçeni de belirt. Net bir tutum Task Response için şarttır ve sonraki tüm paragraflar bununla tutarlı kalmalıdır.",
          },
        ],
      },
      {
        purpose:
          "En güçlü gerekçeni derinlemesine geliştir. Bir paragraf, tek ana fikir; tam olarak açıklanmış ve desteklenmiş olmalı.",
        sentences: [
          {
            role: "Konu cümlesi",
            how: "Paragrafın tek ana fikrini, genellikle Firstly gibi bir sıralama sözcüğüyle başlayarak ver. Okuyucu ayrıntıdan önce ana fikri bilmeli.",
          },
          {
            role: "Açıklama",
            how: "Fikrinin neden veya nasıl doğru olduğunu açıkla. Fikri başka sözcüklerle tekrar etmek yerine 'peki ne olmuş?' sorusunu yanıtla.",
          },
          {
            role: "Örnek (kanıt)",
            how: "Fikri ülke, grup veya durum gibi somut ve gerçekçi bir örnekle destekle. Somut ayrıntı, Band 6 ile Band 7+ arasındaki farkı yaratır.",
          },
          {
            role: "Bağlantı cümlesi",
            how: "Paragrafı, noktayı tutumuna ya da soruya bağlayarak bitir. Paragraf düzeyindeki tutarlılık (cohesion) burada gösterilir.",
          },
        ],
      },
      {
        purpose:
          "İkinci bir gerekçe ekle ya da karşı görüşü kabul edip neden daha zayıf olduğunu açıkla. Diğer tarafı da düşündüğünü göstermek savunmanı olgunlaştırır.",
        sentences: [
          {
            role: "Tavizle başlayan konu cümlesi",
            how: "İkinci fikrini ver veya önce Admittedly ya da Critics claim gibi ifadelerle karşı argümanı kabul et. Tutumunu korurken dengeli olduğunu gösterir.",
          },
          {
            role: "Çürütme",
            how: "Karşı noktanın neden daha az ikna edici olduğunu ya da daha güçlü bir karşı noktanın bulunduğunu açıkla. However veya Nevertheless gibi zıtlık bağlaçları kullan.",
          },
          {
            role: "Örnek (kanıt)",
            how: "Çürütmeni somut bir örnekle göster; böylece yalnızca bir görüş olarak kalmaz.",
          },
          {
            role: "Bağlantı cümlesi",
            how: "Thus veya Consequently gibi sonuç bağlaçlarıyla tutumunun hâlâ geçerli olduğunu göstererek bitir.",
          },
        ],
      },
      {
        purpose: "Tutumunu doğrulayarak net bir son izlenim bırak. Burada asla yeni fikir ekleme.",
        sentences: [
          {
            role: "Sonuç ifadesi ve tutumu yeniden belirtme",
            how: "In conclusion veya To sum up gibi bir ifadeyle başla, ardından görüşünü girişten farklı sözcüklerle yeniden yaz.",
          },
          {
            role: "Ana noktaları özetle",
            how: "İki ana gerekçeni tek cümlede kısaca özetle. Örneklerini tekrarlama.",
          },
          {
            role: "Son düşünce (isteğe bağlı)",
            how: "Argümanından çıkan kısa bir öngörü veya öneri ekleyebilirsin. Zamanın azsa atla.",
          },
        ],
      },
    ],
    tips: [
      TIMING_TIP_TR,
      "Her paragrafta aynı tutumu koru. Girişte 'kısmen katılıyorum' dediysen, gelişme paragraflarında her iki yönü de göster.",
      "'To what extent' sorusunda net ve iyi geliştirilmiş bir 'kesinlikle katılıyorum' ya da 'kısmen katılıyorum' ikisi de yüksek puan alır.",
    ],
  },

  discussion: {
    question:
      "Bazı insanlar çocukların yabancı dil öğrenmeye ilkokulda başlaması gerektiğini düşünür. Diğerleri ortaokulda başlamanın daha iyi olduğuna inanır. Her iki görüşü de tartışın ve kendi fikrinizi belirtin.",
    paragraphs: [
      {
        purpose:
          "Tartışmayı tarafsız biçimde sun ve okuyucuya yazının nasıl ilerleyeceğini, bir görüş belirteceğini söyle.",
        sentences: [
          {
            role: "Genel ifade (dikkat çekici giriş)",
            how: "Konuyu tek bir tarafsız cümleyle tanıt. 'In today's modern world' gibi klişelerden kaçın.",
          },
          {
            role: "Her iki görüşü yeniden ifade et",
            how: "Sorudaki iki tarafı da kendi sözcüklerinle ve eşit ağırlıkta yeniden yaz. Görev 'discuss both' dediği için iki görüş de yer almalı.",
          },
          {
            role: "Plan ve kendi görüşün",
            how: "Her iki tarafı inceleyeceğini belirt ve hangisini desteklediğini söyle. Girişte görüş belirtmek, baştan itibaren net bir tutum sağlar.",
          },
        ],
      },
      {
        purpose:
          "İlk görüşü, onu savunanların yapacağı gibi adil ve ikna edici biçimde, en az bir örnekle açıkla.",
        sentences: [
          {
            role: "Konu cümlesi (A görüşü)",
            how: "İlk görüşü Supporters argue that veya Those in favour claim that gibi aktarma ifadeleriyle ver; okuyucu bunun mutlaka senin görüşün olmadığını anlasın.",
          },
          {
            role: "Açıklama",
            how: "Görüşün arkasındaki gerekçeyi ver. İddiayı değil, işleyiş mekanizmasını açıkla.",
          },
          {
            role: "Örnek (kanıt)",
            how: "Eğitim, aile yaşamı veya diğer ülkelerden somut ve gerçekçi bir örnekle göster.",
          },
          {
            role: "Bağlantı cümlesi",
            how: "Örneğin bu görüş hakkında ne gösterdiğini tarafsız bir dille özetle.",
          },
        ],
      },
      {
        purpose:
          "Karşıt görüşü de aynı adilliğle açıkla, sonra kendi görüşünü belirt ve gerekçelendir. Bu paragraf kompozisyonun yargısını taşır.",
        sentences: [
          {
            role: "Konu cümlesi (B görüşü)",
            how: "On the other hand veya By contrast gibi bir zıtlık bağlacıyla diğer tarafa net biçimde geç.",
          },
          {
            role: "Açıklama",
            how: "Bu ikinci görüşün arkasındaki gerekçeyi yine tarafsız aktarma diliyle ver.",
          },
          {
            role: "Örnek (kanıt)",
            how: "İkinci görüşü de gerçekçi bir örnekle destekle; iki taraf da eşit gelişmiş olsun.",
          },
          {
            role: "Senin görüşün",
            how: "Kendi görüşünü belirt ve kısa bir gerekçe ver. Aktarmadan savunmaya geçişi göstermek için Nevertheless veya In my opinion kullan.",
          },
        ],
      },
      {
        purpose: "Tartışmanın dengesini özetle ve yeni fikir eklemeden kendi görüşünü yeniden belirt.",
        sentences: [
          {
            role: "Sonuç ifadesi ve dengeli özet",
            how: "Her iki görüşün de haklı yanları olduğunu kabul et ve her birini birkaç sözcükle özetle.",
          },
          {
            role: "Görüşünü yeniden belirt",
            how: "Hangi tarafı desteklediğini girişten farklı sözcüklerle doğrula.",
          },
          {
            role: "Son düşünce (isteğe bağlı)",
            how: "İki yaklaşımı birleştirme gibi kısa bir öneriyle bitir.",
          },
        ],
      },
    ],
    tips: [
      TIMING_TIP_TR,
      "Her görüşe yaklaşık eşit yer ver. Bir görüşe tek cümle ayırırsan Task Response puanın düşer.",
      "Senin olmayan görüşler için aktarma ifadeleri (some argue, supporters claim), yalnızca kendi görüşün için birinci tekil kişi ifadeleri kullan.",
    ],
  },

  "advantages-disadvantages": {
    question:
      "Giderek daha fazla insan fiziksel mağazaları ziyaret etmek yerine internetten alışveriş yapıyor. Bu eğilimin avantajları ve dezavantajları nelerdir?",
    paragraphs: [
      {
        purpose:
          "Eğilimi tanıt ve hem yararlarının hem de sakıncalarının dengeli biçimde ele alınacağını belirt.",
        sentences: [
          {
            role: "Genel ifade (dikkat çekici giriş)",
            how: "Konuyla ilgili geniş bir ifadeyle bağlamı kur. Olgusal ve tarafsız tut.",
          },
          {
            role: "Soruyu yeniden ifade et",
            how: "Eğilimi kendi sözcüklerinle, anahtar kelimeleri değiştirerek yeniden yaz. Soruyu kopyalama.",
          },
          {
            role: "Plan (ve istenirse karar)",
            how: "Her iki tarafı da tartışacağını söyle. Soru 'Do the advantages outweigh the disadvantages?' diyorsa kararını da burada belirt; yalnızca avantaj ve dezavantajları soruyorsa karar isteğe bağlıdır.",
          },
        ],
      },
      {
        purpose:
          "Avantajları sun; uzun bir liste yerine bir-iki iyi açıklanmış noktayı geliştir.",
        sentences: [
          {
            role: "Konu cümlesi (ana avantaj)",
            how: "En önemli avantajı paragrafın başında The main advantage of … is … gibi bir ifadeyle belirt.",
          },
          {
            role: "Açıklama",
            how: "Bu yararın pratikte nasıl işlediğini açıkla; yalnızca tekrar etme.",
          },
          {
            role: "Örnek (kanıt)",
            how: "Yarar gören bir kişi veya durumla ilgili gerçekçi bir örnek ver.",
          },
          {
            role: "İkinci avantaj",
            how: "Furthermore veya In addition gibi ekleme bağlaçlarıyla daha kısa bir ikinci avantaj ekle.",
          },
        ],
      },
      {
        purpose:
          "Dezavantajları avantajlarla aynı derinlikte sun. Dengeli geliştirme Task Response puanını yükseltir.",
        sentences: [
          {
            role: "Konu cümlesi (ana dezavantaj)",
            how: "Despite these benefits veya However, there are drawbacks gibi zıtlık ifadesiyle olumsuz yönlere geçtiğini belirt.",
          },
          {
            role: "Açıklama",
            how: "Sorunu ve nedenini açıkla; yalnızca var olduğunu söyleme.",
          },
          {
            role: "Örnek veya sonuç",
            how: "Sonucu somut bir örnekle ya da As a result gibi bir sonuç bağlacıyla göster.",
          },
          {
            role: "İkinci dezavantaj",
            how: "Mümkünse daha geniş toplumsal ya da ekonomik etkisi olan kısa bir ikinci dezavantaj ekle.",
          },
        ],
      },
      {
        purpose: "İki tarafı tart ve okuyucuya net bir son değerlendirme bırak.",
        sentences: [
          {
            role: "Sonuç ifadesi ve özet",
            how: "In conclusion veya To sum up ile başla; ana avantajı ve ana dezavantajı tek cümlede özetle.",
          },
          {
            role: "Karar (son değerlendirme)",
            how: "Hangi tarafın daha güçlü olduğunu ve nedenini belirt. Soru karar istemese bile kısa, dengeli bir yargı iyi bir son izlenim bırakır.",
          },
          {
            role: "Son düşünce (isteğe bağlı)",
            how: "Zamanın varsa kısa bir öneri veya öngörü ekle.",
          },
        ],
      },
    ],
    tips: [
      TIMING_TIP_TR,
      "Sorunun tam ifadesine bak: 'What are the advantages and disadvantages?' denge ister; 'Do the advantages outweigh the disadvantages?' ise giriş ve sonuçta net bir karar ister.",
      "Her taraf için iyi geliştirilmiş iki nokta, geliştirilmemiş beş noktadan daha değerlidir.",
    ],
  },

  "problem-solution": {
    question:
      "Büyük miktarlarda plastik atık dünyanın dört bir yanında okyanusları ve nehirleri kirletiyor. Bu sorunun başlıca nedenleri nelerdir ve onu azaltmak için neler yapılabilir?",
    paragraphs: [
      {
        purpose: "Sorunu tanıt ve kompozisyonun hem nedenleri hem çözümleri ele alacağını belirt.",
        sentences: [
          {
            role: "Genel ifade (dikkat çekici giriş)",
            how: "Konunun önemini gösteren geniş bir ifadeyle başla. Konuya özgü tut.",
          },
          {
            role: "Sorunu yeniden ifade et",
            how: "Sorudaki problemi farklı sözcüklerle yeniden yaz; soruyu anladığını göster.",
          },
          {
            role: "Yazının planı",
            how: "Kompozisyonun nedenleri belirleyip çözümler önereceğini, sorudaki sırayla belirt.",
          },
        ],
      },
      {
        purpose:
          "Nedenleri (veya sorunları) derinlemesine açıkla; çünkü ardından gelen çözümler bunlara yanıt vermelidir.",
        sentences: [
          {
            role: "Konu cümlesi (ana neden)",
            how: "En önemli nedeni hemen belirt: A major cause of … is …",
          },
          {
            role: "Açıklama",
            how: "Bu nedenin soruna nasıl yol açtığını, neden-sonuç zincirini göstererek açıkla.",
          },
          {
            role: "Örnek (kanıt)",
            how: "Nedeni görünür kılan gerçekçi bir örnek ver.",
          },
          {
            role: "İkinci neden",
            how: "In addition veya Another factor is … ile daha kısa bir ikinci neden ekle.",
          },
        ],
      },
      {
        purpose:
          "Nedenlerle açıkça eşleşen gerçekçi çözümler öner ve her birinin neden işe yarayacağını açıkla.",
        sentences: [
          {
            role: "Konu cümlesi (ana çözüm)",
            how: "En etkili çözümü ve kimin harekete geçmesi gerektiğini belirt. can, should veya could gibi modal fiiller kullan.",
          },
          {
            role: "Açıklama",
            how: "Çözümün nasıl işlediğini ve yukarıdaki nedene nasıl yanıt verdiğini açıkla.",
          },
          {
            role: "Örnek (kanıt)",
            how: "Çözümü, denenmiş bir politika gibi gerçekçi bir örnekle destekle.",
          },
          {
            role: "İkinci çözüm ve sonuç",
            how: "İkinci bir çözüm ekle ve Consequently gibi bir sonuç bağlacıyla olası sonucunu belirt.",
          },
        ],
      },
      {
        purpose:
          "Nedenleri ve çözümleri özetle; harekete geçmenin aciliyetine dair güçlü bir kapanış mesajıyla bitir.",
        sentences: [
          {
            role: "Sonuç ifadesi ve özet",
            how: "In conclusion ile başla; ana nedeni ve ana çözümü tek cümlede özetle.",
          },
          {
            role: "Son uyarı veya harekete geçirici çağrı",
            how: "Hiçbir şey değişmezse ne olacağına dair kısa bir uyarıyla ya da harekete geçme çağrısıyla bitir.",
          },
          {
            role: "İsteğe bağlı öneri",
            how: "Zamanın varsa değişimi kimin yönlendirmesi gerektiğini belirten tek bir cümle ekle.",
          },
        ],
      },
    ],
    tips: [
      TIMING_TIP_TR,
      "Çözümlerin nedenlerle eşleşmesini sağla; böylece kompozisyon iki ayrı liste gibi değil, mantıklı görünür.",
      "Çözümler için modal fiiller (could, should, would, might) kullan: kesin ifadelerden daha gerçekçi duyulurlar.",
      "Soru iki bölümlüyse, her bölüme sorudaki sırayla kendi gelişme paragrafını ver.",
    ],
  },

  "two-part-question": {
    question:
      "Günümüzde birçok genç, eğitim veya iş için memleketini ya da ülkesini terk ediyor. Sizce bu neden oluyor? Bu olumlu mu yoksa olumsuz bir gelişme mi?",
    paragraphs: [
      {
        purpose:
          "Konuyu tanıt ve her iki soruyu da yanıtlayacağını, ikinci soru için görüş belirteceğini bildir.",
        sentences: [
          {
            role: "Genel ifade (dikkat çekici giriş)",
            how: "Konuyu çerçeveleyen tarafsız bir ifadeyle başla.",
          },
          {
            role: "Soruları yeniden ifade et",
            how: "Sınav görevlisinin ne sorduğunu, her iki soruyu da kapsayacak şekilde kendi sözcüklerinle yeniden yaz.",
          },
          {
            role: "Plan ve tutumun",
            how: "Soruları nasıl yanıtlayacağını belirt ve ikinci soruya dair genel görüşünü ver; böylece tutumun baştan net olsun.",
          },
        ],
      },
      {
        purpose:
          "Başka soruya geçmeden önce ilk soruyu tam olarak yanıtla. Bu paragraftaki her şey 'neden' sorusuyla ilgili olmalı.",
        sentences: [
          {
            role: "Konu cümlesi (1. sorunun yanıtı)",
            how: "Soruyu doğrudan, sorunun kendi sözcüklerinden yararlanarak yanıtla. Sınav görevlisi cevabı ilk cümlede bulmalı.",
          },
          {
            role: "Açıklama",
            how: "Bu nedenin gençleri taşınmaya nasıl ve neden yönelttiğini açıkla.",
          },
          {
            role: "Örnek (kanıt)",
            how: "Gerçekçi bir örnekle göster.",
          },
          {
            role: "İkinci neden",
            how: "Cevabın tek boyutlu olmadığını göstermek için kısaca ikinci bir neden ekle.",
          },
        ],
      },
      {
        purpose:
          "İkinci soruyu net bir yargı ve gerekçeyle yanıtla; böylece görevin her bölümü karşılanmış olur.",
        sentences: [
          {
            role: "Konu cümlesi (2. sorunun yanıtı)",
            how: "Yargını hemen belirt; yine sorudaki sözcükleri (olumlu veya olumsuz) kullan.",
          },
          {
            role: "Açıklama",
            how: "Gelişmenin birey veya toplum için neden olumlu (ya da olumsuz) olduğunu açıkla.",
          },
          {
            role: "Örnek (kanıt)",
            how: "Yargını somut bir örnekle destekle.",
          },
          {
            role: "Taviz",
            how: "Admittedly veya Although ile bir olumsuz yönü kabul et, sonra neden daha az önemli olduğunu açıkla. Bu, dengeli düşündüğünü gösterir.",
          },
        ],
      },
      {
        purpose: "Her iki yanıtın doğrudan ve kısa bir özetini ver. Yeni gerekçe ekleme.",
        sentences: [
          {
            role: "Sonuç ifadesi ve 1. sorunun yanıtı",
            how: "In conclusion ile başla ve ana nedeni tek bir cümlecikte yeniden belirt.",
          },
          {
            role: "2. sorunun yanıtı",
            how: "Yargını gelişme paragrafındakinden farklı sözcüklerle yeniden belirt.",
          },
          {
            role: "Son düşünce (isteğe bağlı)",
            how: "Kısa bir öneri veya öngörüyle bitir.",
          },
        ],
      },
    ],
    tips: [
      TIMING_TIP_TR,
      "Soruları göründükleri sırayla yanıtla ve her yanıtı konu cümlesinde kolayca bulunur yap.",
      "Sorunun bir bölümünü asla yanıtsız bırakma: yazı mükemmel olsa bile Task Response puanını sınırlar.",
      "Soruya doğrudan yanıt verdiğini göstermek için konu cümlelerinde sorulardaki sözcükleri (reason, positive, negative) yeniden kullan.",
    ],
  },
};
