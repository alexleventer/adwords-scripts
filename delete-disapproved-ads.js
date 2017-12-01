function main() {
  const ads = AdWordsApp.ads().withCondition("ApprovalStatus != APPROVED").get();

  while(ads.hasNext()) {
    ad.remove();
  }
}