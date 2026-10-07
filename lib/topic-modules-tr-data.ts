/**
 * Turkish counterparts for topic-modules-data.ts. The vocabulary words and example sentences stay in English;
 * `definitions` is parallel to TopicModule.vocabulary (same order).
 */
export type TopicModuleTr = {
  topic: string;
  question: string;
  definitions: string[];
  bodyParagraph: string;
};

export const TOPIC_MODULES_TR: Record<string, TopicModuleTr> = {
  crime: {
    topic: "Suç",
    question:
      "Bazı insanlar daha ağır cezaların suçu azaltmanın en iyi yolu olduğuna inanır. Bu görüşe ne ölçüde katılıyor veya katılmıyorsunuz?",
    definitions: [
      "İnsanları sonuçlarından korkutarak bir eylemden vazgeçiren şey; caydırıcı unsur.",
      "Hüküm giymiş bir suçlunun serbest kaldıktan sonra yeniden suç işleme eğilimi; suça geri dönüş.",
      "Bir suçlunun eğitim ve destek yoluyla topluma yararlı, yasalara uyan bir yaşama döndürülmesi süreci; rehabilitasyon.",
      "Özellikle gençler tarafından işlenen küçük suçlar veya toplum karşıtı davranışlar; suça yönelim.",
      "İntikam veya yapılan yanlışın ahlaki karşılığı olarak verilen ceza; misilleme.",
      "Yanlış bir eylemden dolayı suçlanmayı veya sorumlu tutulmayı hak eden; kusurlu.",
      "Birini hapse atmak veya cezaevinde tutmak.",
      "Yasalara uyan ve başkalarına karşı sorumlu davranan; yasalara saygılı.",
      "Gelir, barınma veya eğitim gibi temel ihtiyaçların ya da fırsatların eksikliği; yoksunluk.",
      "Cezalandırmada yumuşaklık veya sert davranmaktan kaçınma; hoşgörü.",
    ],
    bodyParagraph:
      "Kuşkusuz, ağır cezalar güçlü bir caydırıcı olabilir; ancak kanıtlar, tek başına cezalandırmanın nadiren daha güvenli toplumlar yarattığını gösteriyor. Mahkûmlara eğitim veya mesleki beceri kazandırmadan yalnızca hapseden cezaevleri, çoğu zaman yasalara uyan vatandaşlar olarak yaşamaya daha hazır olmayan bireyleri serbest bırakır; bu da birçok ülkede suça geri dönüş oranlarının neden inatla yüksek kaldığını açıklar. Buna karşılık rehabilitasyon programları, yoksunluk ve işsizlik gibi suç işlemenin altında yatan nedenlere değinir ve daha düşük uzun vadeli maliyetle yeniden suç işlemeyi azalttığı gösterilmiştir. Dolayısıyla bir ölçüde misilleme anlaşılabilir olsa da, hükümetler daha ağır cezalar yerine ıslaha öncelik vermelidir.",
  },
  health: {
    topic: "Sağlık",
    question:
      "Bazı insanlar hükümetlerin hastalıkları tedavi etmek yerine önlemeye odaklanması gerektiğini düşünür. Bu görüşe ne ölçüde katılıyor veya katılmıyorsunuz?",
    definitions: [
      "Bir şeyin, özellikle hastalığın, ortaya çıkmasını engellemeyi amaçlayan; önleyici.",
      "Çok fazla oturmayı ve çok az fiziksel aktiviteyi içeren; hareketsiz.",
      "Uzun süre devam eden veya sürekli tekrarlayan, özellikle hastalıklar için kullanılır; kronik.",
      "Sağlığa zarar veren aşırı vücut yağı durumu; obezite.",
      "Diyetteki gerekli besin maddelerinin eksikliğinden kaynaklanan durum; yetersiz beslenme.",
      "Uzun ömür; bir kişinin yaşadığı sürenin uzunluğu.",
      "Birini ağır biçimde zayıflatan veya normal işlevlerini yapamaz hale getiren; güçten düşüren.",
      "Yalnızca belirtileri değil, kişinin fiziksel, zihinsel ve sosyal ihtiyaçlarının tamamını ele alan; bütüncül.",
      "Genellikle aşı yoluyla bir kişiyi bir hastalığa karşı dirençli kılma süreci; bağışıklama.",
      "Bir hastalığın aynı anda çok sayıda insanı etkileyen yaygın salgını; salgın.",
    ],
    bodyParagraph:
      "Önleyici sağlık hizmetlerine yatırım yapan hükümetler, hastalığa yalnızca tepki verenlere kıyasla sonunda daha az harcar. Hareketsiz yaşam tarzları ve kötü beslenme, dünya genelinde obezitenin ve diyabet gibi kronik hastalıkların artmasını körüklemiş, hastaneler üzerinde büyük bir yük oluşturmuştur. Buna karşılık bağışıklama kampanyaları, tedavi maliyetinin çok küçük bir bölümüyle güçten düşüren birçok hastalığı neredeyse ortadan kaldırmıştır. Ayrıca egzersizi, beslenmeyi ve ruhsal iyi oluşu teşvik eden bütüncül bir yaklaşım ömrü uzatabilir ve vatandaşların ekonomik olarak daha uzun süre üretken kalmasını sağlayabilir. Bu nedenle önleme isteğe bağlı bir ek değil, ihtiyatlı bir uzun vadeli stratejidir.",
  },
  globalization: {
    topic: "Küreselleşme",
    question:
      "Küreselleşme yerel kültürlerin yok olmasına neden oluyor. Bu eğilimin avantajları dezavantajlarından ağır basıyor mu?",
    definitions: [
      "Şeylerin veya kültürlerin birbirine benzer hale getirilmesi, çeşitliliğin azalması; tek tipleşme.",
      "Ülkelerin veya grupların birbirine dayandığı ilişki; karşılıklı bağımlılık.",
      "Birçok ülkede faaliyet gösteren; birçok ülkede şubesi olan büyük şirket; çok uluslu.",
      "Daha önce şirket içinde yapılan işlerin, çoğunlukla yurt dışındaki dış firmalara yaptırılması; dış kaynak kullanımı.",
      "Dünyanın birçok yerinden insanları ve etkileri barındıran; açık fikirli ve dünyalı; kozmopolit.",
      "Bir azınlık grubun baskın kültürün gelenek ve tutumlarını benimsemesi süreci; asimilasyon.",
      "Bir şeyin sayısındaki veya yayılmasındaki hızlı artış; çoğalma.",
      "Atalarının vatanı dışında yaşayan ama ona kültürel bağlarını koruyan topluluk; diaspora.",
      "İthal mallara uygulanan vergi; gümrük tarifesi.",
      "Her yerde bulunan veya görülen; her yerde hazır ve nazır.",
    ],
    bodyParagraph:
      "Küreselleşmenin en sık dile getirilen sakıncalarından biri kültürün tek tipleşmesidir. Çok uluslu şirketler her yerde var olmaya başladıkça, aynı fast-food zincirleri ve moda markaları Lagos'tan Seul'e kadar şehirlerde ortaya çıkıyor ve yerel gelenekleri yavaş yavaş yerinden ediyor. Küresel medyayla beslenen genç kuşaklar baskın tüketim kültürüne asimilasyon yaşayabilir ve kendi dillerindeki akıcılığı kaybedebilir. Yine de bu eğilim tamamen olumsuz değildir; çünkü uluslararası temasın çoğalması toplumları daha kozmopolit ve hoşgörülü de kılmıştır. Politika yapıcıların sorunu, refahı besleyen ekonomik karşılıklı bağımlılıktan ödün vermeden kültürel kimliği korumaktır.",
  },
  "government-spending": {
    topic: "Devlet Harcamaları",
    question:
      "Bazı insanlar hükümetlerin vergi mükelleflerinin parasını prestijli projeler yerine temel hizmetlere harcaması gerektiğine inanır. Bu görüşe ne ölçüde katılıyor veya katılmıyorsunuz?",
    definitions: [
      "Kaynakları veya parayı belirli bir amaç için dağıtmak; tahsis etmek.",
      "Bir şeye harcanan para miktarı; harcama.",
      "Devlet geliri, vergiler ve kamu harcamalarıyla ilgili; mali.",
      "Bir faaliyeti veya ürünü, daha ucuza gelmesi için kamu parasıyla desteklemek; sübvanse etmek.",
      "Bir ülkenin yollar, demiryolları, su ve enerji gibi temel fiziksel sistemleri; altyapı.",
      "Devletin başlıca vergilerle elde ettiği gelir; kamu geliri.",
      "Bütçe açığını kontrol etmek için kamu harcamalarını kısma politikası; kemer sıkma.",
      "İhtiyacı olanların sağlığını ve yaşam standardını koruyan devlet desteği; sosyal refah.",
      "Özellikle para konusunda dikkatli yargı ve ihtiyat gösteren; ihtiyatlı.",
      "Eylem ve kararlarını açıklamak ve gerekçelendirmek zorunda olan; hesap verebilir.",
    ],
    bodyParagraph:
      "Hükümetlerin, sınırlı kamu kaynaklarını toplumsal getirisi en yüksek alanlara tahsis etme görevi vardır. Demiryolları ve temiz su sistemleri gibi altyapıya yapılan harcama uzun vadeli ekonomik büyüme sağlarken, stadyum gibi prestij projeleri çoğu zaman vergi mükelleflerine pahalı bakım faturaları bırakır. Benzer şekilde yetkililer toplu taşımayı sübvanse ettiğinde, trafik sıkışıklığını azaltır ve düşük gelirli ailelerin işe erişimini kolaylaştırır. Elbette, özellikle kemer sıkma dönemlerinde mali disiplin şarttır; ancak sosyal refahı ve temel hizmetleri kısmak uzun vadede nadiren para tasarrufu sağlar. Bu nedenle bakanlar, şeffaf bütçeler yayımlayarak vatandaşlara karşı hesap verebilir kalmalıdır.",
  },
  art: {
    topic: "Sanat",
    question:
      "Bazı insanlar sanat bir lüks olduğu için hükümetlerin sanatı fonlamaması gerektiğini düşünür. Bu görüşe ne ölçüde katılıyor veya katılmıyorsunuz?",
    definitions: [
      "Güzellikle ve güzelliğin takdir edilmesiyle ilgili; bir şeyin görsel tarzı; estetik.",
      "Geçmişten miras kalan ve bir toplum tarafından değer verilen gelenekler, yapılar ve nesneler; miras.",
      "Sanatçılara veya kültür kurumlarına mali destek veren kişi ya da kuruluş; hami, destekçi.",
      "Bir beceriyi, niteliği veya tutumu zamanla geliştirmek ve güçlendirmek; yetiştirmek.",
      "Bir duyguyu, anıyı veya imgeyi zihinde canlandırmak; çağrıştırmak.",
      "Yeni, deneysel ve özellikle sanatta ana akımın önünde olan; öncü, avangart.",
      "Drama veya müzik gibi sanatı deneyimleyerek hissedilen duygusal boşalma; katarsis.",
      "Bir müzedeki veya sergideki eserleri seçen, düzenleyen ve koruyan kişi; küratör.",
      "Ciddi düşünmeyi veya yeni fikirleri harekete geçiren; düşündürücü.",
      "Güçlü bir duygusal veya kişisel tepki uyandırarak birinin gönlüne dokunmak; yankı uyandırmak.",
    ],
    bodyParagraph:
      "Sanata kamu fonu ayrılması çoğu zaman lüks diye geçiştirilir; oysa ulusal kimliğin dayandığı kültürel mirası korur. Müzeler ve galeriler, önceki kuşakların değerlerini ve mücadelelerini çağrıştıran eserleri korurken, çağdaş ve düşündürücü sergiler vatandaşları varsayımlarını sorgulamaya teşvik eder. Bu kurumları süresiz biçimde ayakta tutabilecek özel hami sayısı az olduğundan, devlet desteği sanatın yalnızca varlıklılara değil herkese açık kalmasını sağlar. Ayrıca müzik, tiyatro veya resimle ilgilenmek bir tür katarsis sunar; insanların duygularını işlemesine ve empati geliştirmesine yardımcı olur. Bu nedenlerle sanata yapılan harcama bir şımartma değil, toplumsal bütünleşmeye yapılan bir yatırımdır.",
  },
};
