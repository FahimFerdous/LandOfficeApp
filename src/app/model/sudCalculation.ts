import { UserInfos } from "./user-inofo";

export class SudCalculation {
  SudCalculationActionHandaler(userInfos: UserInfos) {
    console.log('from sud Calculation',userInfos.licenceFee);
    userInfos.halDabi = parseFloat(userInfos.jomirPoriman) *userInfos.licenceFee;
    var currentDateObj = new Date();
    var currentyearInEnglish = currentDateObj.getUTCFullYear();
    
    var currentYearInBangla = currentyearInEnglish - 593;
    var sorbosesKhajnaPorisodherBosorInBangla= parseInt(userInfos.sorbosesKhajnaPorisodherBosor)-593;
    userInfos.bokeyaBosor =
      currentYearInBangla -
      sorbosesKhajnaPorisodherBosorInBangla;

    if (userInfos.bokeyaBosor > 1) {
      let calculateYear = userInfos.bokeyaBosor * (userInfos.bokeyaBosor + 1);
      let DivisonResult = calculateYear / 32;

      let bokeyaDabirSud = DivisonResult * userInfos.halDabi;

      let tempMotDabi = (userInfos.bokeyaBosor + 1) * userInfos.halDabi;

      let MotDabi = bokeyaDabirSud + tempMotDabi;

      userInfos.motDabi = MotDabi;

      userInfos.bokeyaDabirSud = bokeyaDabirSud;
    } else {
      if (userInfos.bokeyaBosor <= 0) {
        userInfos.bokeyaBosor = 1;
      }
      let step1 = userInfos.bokeyaBosor;

      let tempsud = Math.round(userInfos.bokeyaDabi * 0.0625);

      let bokeyaDabirSud = tempsud * step1;

      let motDabi =
        bokeyaDabirSud +
        parseInt(userInfos.bokeyaDabi) +
        parseInt(userInfos.halDabi);
      userInfos.motDabi = motDabi;

      userInfos.bokeyaDabirSud = bokeyaDabirSud;
     // userInfos.bokeyaBosor = 0;
    }

    return userInfos;
  }
}
