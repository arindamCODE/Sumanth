import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const providers = [
      { id: "abc-news-au",  name: "ABC News (AU)" },
      { id: "al-jazeera-english", name: "Al Jazeera English" },
      { id: "ars-technica", name: "Ars Technica" },
      { id: "associated-press", name: "Associated Press" },
      { id: "espn-cric-info", name:   "ESPN Cric Info" },
      { id: "financial-times", name: "Financial Times" },
      { id: "independent", name:   "Independent" },
      { id: "mashable", name: "Mashable" },
      { id: "nfl-news", name: "NFL News" },
      { id: "techradar", name: "TechRadar" },
      { id: "the-economist", name: "The Economist" }
    ];
    return {providers};
  }
}