package assignment;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class MinMaxFinderTest {
	
	MinMaxFinder mm;
	
	@BeforeEach
	void Init() {
		mm = new MinMaxFinder();
	}
	
	@Test
	void testarr() {
		int[] array1 = {1,2,3,4,5,6,7,8,9};
		int[] actual = mm.findMinMax(array1);
		int[] expected = {1,9};
		assertArrayEquals(expected,actual);
	}
	@Test
	@DisplayName("Tesing for Positive and Negative values")
	void test3MaxMinFinder() {
		mm = new MinMaxFinder();
		int[] array1= {-1,-2,3,4,5,6,7,8,9};
		int[] actual =  mm.findMinMax(array1);
		int [] expected = {-2,9};
		assertArrayEquals(expected,actual);
	}
	@Test
	@DisplayName("Tesing for only negative values")
	void test4MaxMinFinder() {
		mm = new MinMaxFinder();
		int[] array1= {-1,-2,-3,-4,-5,-6,-7,-8,-9};
		int[] actual =  mm.findMinMax(array1);
		int [] expected = {-9,-1};
		assertArrayEquals(expected,actual);
	}
	@Test
	@DisplayName("Tesing for Negative values with zero")
	void test5MaxMinFinder() {
		mm = new MinMaxFinder();
		int[] array1= {0,-2,-3,-4,-5,-6,-7,-8,-9};
		int[] actual =  mm.findMinMax(array1);
		int [] expected = {-9,0};
		assertArrayEquals(expected,actual);
	}

}
