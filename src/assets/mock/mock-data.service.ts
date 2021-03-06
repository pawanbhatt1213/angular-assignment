import { Observable } from "rxjs";

export class MockDataService {
    private mockData: any = {
        "id": "test",
        "metadata": {
        },
        "data": {

            "areas": [
                {
                    "type": "column",
                    "sections": [
                        {
                            "type": "title",
                            "text": "Heading One",
                            "rjf": [
                                {
                                    "type": "heading-1",
                                    "depth": 0,
                                    "text": "Hello, Welcome to the world of Angular",
                                    "inlineStyleRanges": [],
                                    "inlineEntityRanges": []
                                }
                            ]
                        },
                        {
                            "type": "description",
                            "text": "Sample",
                            "rjf": [
                                {
                                    "type": "paragraph",
                                    "depth": 0,
                                    "text": "Learn Angular",
                                    "inlineStyleRanges": [],
                                    "inlineEntityRanges": []
                                }
                            ]
                        },
                        {

                            "rjf": [
                                {
                                    "type": "heading-1",
                                    "depth": 0,
                                    "text": "Learn GraphQL",
                                    "inlineStyleRanges": [],
                                    "inlineEntityRanges": []
                                },
                                {
                                    "type": "paragraph",
                                    "depth": 1,
                                    "text": "Learn Apollo",
                                    "inlineStyleRanges": [],
                                    "inlineEntityRanges": []
                                },
                                {
                                    "type": "paragraph",
                                    "depth": 1,
                                    "text": "Learn BamInsight",
                                    "inlineStyleRanges": [],
                                    "inlineEntityRanges": []
                                },
                                {
                                    "type": "paragraph",
                                    "depth": 1,
                                    "text": "Do you have questions or comments and do you wish to contact me? Please visit our customer support page.",
                                    "inlineStyleRanges": [],
                                    "inlineEntityRanges": [
                                        {
                                            "type": "LINK",
                                            "offset": 83,
                                            "length": 16,
                                            "data": {
                                                "target": "_self",
                                                "url": "https://goole.com"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    };
    getData() {
        return this.mockData;
    }
}