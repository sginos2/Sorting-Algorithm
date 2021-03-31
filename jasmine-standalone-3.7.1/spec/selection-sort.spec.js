describe('selectionSort', () => {
    it('should return [1, 2, 3, 4, 5] when given [4, 2, 1, 5, 3]', function() {
        let result = selectionSort([4, 2, 1, 5, 3]);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });
    it('should return [7, 8, 9] when given [9, 7, 8]', function() {
        let result = selectionSort([9, 7, 8]);
        expect(result).toEqual([7, 8, 9]);
    });
    it('should return [3, 16, 28, 43] when given [28, 3, 43, 16]', function() {
        let result = selectionSort([28, 3, 43, 16]);
        expect(result).toEqual([3, 16, 28, 43]);
    });
    it('should return [37, 56, 84, 112, 386] when given [84, 112, 56, 386, 37]', function() {
        let result = selectionSort([84, 112, 56, 386, 37]);
        expect(result).toEqual([37, 56, 84, 112, 386]);
    });
    it('should return [29, 53, 54, 66] when given [66, 53, 29, 54]', function() {
        let result = selectionSort([66, 53, 29, 54]);
        expect(result).toEqual([29, 53, 54, 66]);
    });
});