describe("Client-side JavaScript Functions", () => {
    it("fetchData should make an AJAX request and call renderData and renderPagination", (done) => {
      spyOn($, "getJSON").and.callFake((url, callback) => {
        callback({
          items: [
            { id: 1, label: "Item 1", quantity: 10 },
            { id: 2, label: "Item 2", quantity: 5 },
          ],
          totalItems: 2,
        });
      });
  
      spyOn(window, "renderData");
      spyOn(window, "renderPagination");
  
      fetchData(1);
  
      expect($.getJSON).toHaveBeenCalled();
      expect(renderData).toHaveBeenCalled();
      expect(renderPagination).toHaveBeenCalled();
      done();
    });
  
    // Add more tests for other functions like renderData, renderPagination, etc.
  });
  